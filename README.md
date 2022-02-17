# DeepPavlov Frontend Interview take-home coding tasks

This is a simple webapp which renders [RASA stories](https://legacy-docs-v1.rasa.com/nlu/training-data-format/#markdown-format) as a graph. See the [working demo here](https://relaxed-blackwell-81791b.netlify.app/). The original app was written in vanilla TS, without React. Your task is to port it to React, as well as to fill out a blank in the code.


1. Fork & clone this repo and install with `npm install`
2. To start a dev server just run `npm start`
2. You only need to port the code in `graph.tsx`. `index.tsx` is already ported to React and `story.ts` only contains logic, no UI.
3. I suggest you start by rewriting the `renderNode` function as a functional component and work your way down the file. (you don't need to change anything about the tippy related code, just keep the class names)
4. In the `updateLines` function, make sure to fill out the missing part