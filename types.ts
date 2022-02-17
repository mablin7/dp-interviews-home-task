export type Action = {
  name: string,
  next: Story
}

export type Story = {
  [intentName: string]: Action
}

export type Stories = {
  [storyName: string]: Story
}

export type MergedStory = {
  [intentName: string]: MergedAction[]
}

export type MergedAction = {
  name: string,
  next: MergedStory
}
