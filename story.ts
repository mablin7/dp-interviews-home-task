import { Stories, Story, MergedStory, MergedAction, Action } from './types'

export function parseStories(text: string): Stories {
  const stories: Stories = {}
  let currentStory: Story
  let lastIntent = ''

  text.split('\n').forEach(line => {
    line = line.trim()
    if (line.startsWith('##')) {
      currentStory = {}
      const storyName = line.replace('## ', '')
      stories[storyName] = currentStory

    } else if (line.startsWith('-')) {
      const newAction: Action = {
        name: line.replace('- ', ''),
        next: {}
      }

      if (lastIntent !== '') {
        currentStory[lastIntent] = newAction
        lastIntent = ''
      } else {
        currentStory['>'] = newAction
      }

      currentStory = newAction.next

    } else if (line.startsWith('*')) {
      lastIntent = line
        .replace('* ', '')
        .replace(/{.*}/, '') // for now just ignore entities
    }
  })

  return stories
}

export function mergeStories(storiesToMerge: Stories): MergedStory {
  const mergeActions = (actions: Action[]): MergedAction[] => {
    const uniqueActions: { [actionName: string]: Story[] } = {}
    actions.forEach(({ name, next }) => {
      if (!uniqueActions[name]) uniqueActions[name] = []
      uniqueActions[name].push(next)
    })

    const mergedActions: MergedAction[] = []
    Object.entries(uniqueActions).forEach(([name, nextStories]) => {
      mergedActions.push({
        name, next: recurseStories(nextStories)
      })
    })

    return mergedActions
  }
  const recurseStories = (stories: Story[]): MergedStory => {
    const uniqueStories: { [storyName: string]: Action[] } = {}
    stories.forEach(story => {
      Object.entries(story).forEach(([intentName, action]) => {
        if(!uniqueStories[intentName]) uniqueStories[intentName] = []
        uniqueStories[intentName].push(action)
      })
    })

    const mergedStory: MergedStory = {}
    Object.entries(uniqueStories).forEach(([intentName, actions]) => {
      mergedStory[intentName] = mergeActions(actions)
    })

    return mergedStory
  }

  return recurseStories(Object.values(storiesToMerge))
}

export function getFirstIntent(stories: Stories): string {
  const uniqueIntentNames = Object.values(stories)
    .map(Object.keys)
    .flat()
    .filter((key, idx, arr) => arr.indexOf(key) === idx)

  if (uniqueIntentNames.length !== 1)
    throw new Error('Multiple starting intents not supported!')

  return uniqueIntentNames[0]
}
