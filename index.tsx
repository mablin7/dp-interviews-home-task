import React, { FC, useState, useMemo } from 'react'
import { render } from 'react-dom'

import { parseStories, getFirstIntent, mergeStories } from './story'
import { Graph } from './graph'

const Legend: FC<{ onStorySelect: (file: string) => void }> = ({ onStorySelect }) => {
  return (
    <div className="floating">
      Select a story:
      <select onChange={(ev) => onStorySelect(ev.target.value)}>
        <option value="demo.md">Small story</option>
        <option value="restaurant.md">Restaurants</option>
      </select>

      <hr />
      <div>
        Legend:
        <ul>
          <li>
            <span style={{ backgroundColor: "#8bc34a", border: "1px solid #5a9216" }} className="legend"> </span>
            User intents (collapsed)
          </li>
          <li>
            <span style={{ backgroundColor: "#C5E1A5", border: "1px solid #5a9216" }} className="legend"> </span>
            User intents (unfolded)
          </li>
          <li>
            <span style={{ backgroundColor: "#00bcd4", border: "1px solid #008ba3" }} className="legend"> </span>
            Responses
          </li>
        </ul>
      </div>
    </div>
  )
}

function App() {
  const [currentStoryFile, setCurrentStory] = useState<string>('demo.md')
  const graphProps = useMemo(() => {
    if (currentStoryFile) {
      fetch(currentStoryFile)
      .then(res => res.text())
      .then(text => {
        const stories = parseStories(text)
        const startingIntent = getFirstIntent(stories)
        const mergedStory = mergeStories(stories)
        return {startingIntent, story: mergedStory[startingIntent] }
      })
    }
    return {}
  }, [currentStoryFile])

  return (
    <>
      <Graph {...graphProps} />
      <Legend onStorySelect={(path) => setCurrentStory(path)} />
    </>
  )
}

const root = document.getElementById('root') as HTMLDivElement
render(<App />, root)