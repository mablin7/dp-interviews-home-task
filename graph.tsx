import React, {} from 'react'
import tippy, { Instance } from 'tippy.js'
import 'tippy.js/dist/tippy.css'

import { MergedAction } from './types'

function div(...classes: string[]): HTMLElement {
  const el = document.createElement('div')
  el.classList.add(...classes)
  return el
}

let tippyInstances: Instance[]
function updateTippy() {
  if (tippyInstances) {
    tippyInstances.forEach(t => t.unmount())
    tippyInstances.forEach(t => t.destroy())
  }
  tippyInstances = tippy('.tooltip', {
    delay: [550, 100]
  })
}

/**
 * Creates a single node and attaches it to `cont`
 */
function renderNode(nodeName: string, type: 'action' | 'intent', cont: HTMLElement) {
  const fullName = nodeName
    .toLowerCase()
    .replace(/^utter_/, '')
    .split(/\+|_/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
  const shortName = fullName.split(' ').slice(0, 2).join(' ')

  const node = div(type, 'node')
  node.innerText = shortName
  cont.appendChild(node)

  if (type === 'intent') {
    node.setAttribute('data-tippy-content', fullName)
    node.classList.add('tooltip')
  }

  return node
}

/**
 * Factory for click listener on nodes, handles toggling collapse. (hint: could make for a nice hook)
 */
function rerenderIntentAction(intentName: string, actions: MergedAction[], startCollapsed = true) {
  let collapsed = startCollapsed
  function listener(this: HTMLElement) {
    if (!this.parentElement?.parentElement) return

    collapsed = !collapsed
    const cont = this.parentElement
    cont.innerHTML = ''
    renderIntentAction(intentName, actions, collapsed, cont, listener)
    updateTippy()
    updateLines()
  }
  return listener
}

/**
 * Recursively renders the story.
 * Every node consits of a root node-cont, an intent (green div) and a list of actions (blue divs).
 * All the nodes below a given node are rendered as child elements, this makes collapsing parts of the tree trivial.
 */
function renderIntentAction(intentName: string, actions: MergedAction[], collapsed = true, cont?: HTMLElement, rerender?: EventListener): HTMLElement {
  cont = cont || div('node-cont')

  const intentDiv = renderNode(intentName, 'intent', cont)
  intentDiv.addEventListener('click', rerender || rerenderIntentAction(intentName, actions))
  if (collapsed)
    intentDiv.classList.add('collapsed')

  if (!collapsed) {
    const actionsCont = div('actions-cont')
    const childrenCont = div('children-cont')
    // Though it's rare, there can be two parallel lists of actions, that's why we need to loop here.
    actions.forEach((action: MergedAction) => {
      const actionsList = div('actions-list')

      let currentAction: MergedAction | undefined = action
      do {
        renderNode(currentAction.name, 'action', actionsList)

        if (currentAction.next['>']) {
          currentAction = currentAction.next['>'][0]
        } else {
          Object.entries(currentAction.next).forEach(([intentName, childActions]) => {
            childrenCont.appendChild(renderIntentAction(intentName, childActions))
          })
          currentAction = undefined
        }
      } while (currentAction)

        actionsCont.appendChild(actionsList)
    })

    cont.appendChild(actionsCont)
    cont.appendChild(childrenCont)
  }

  return cont
}

/**
 * Redraws the connecting lines between the nodes
 * The way this is done is not very React-friendly, if you leave it as it is, it's probably okay.
 */
function updateLines() {
  const svg = document.getElementById('graph-svg')
  if(!svg) return

  svg.innerHTML = ''

  document.querySelectorAll('.node-cont')
  .forEach((parent) => {
    const childrenCont = parent.querySelector('.children-cont') as HTMLElement
    const actionsCont = parent.querySelector('.actions-cont') as HTMLElement
    if (!childrenCont || !actionsCont) return

      const children = childrenCont.children
      for (let i = 0; i < children.length; i++) {
        const child = children[i].querySelector('.node') as HTMLElement

        // TODO: Write the logic which calculates the starting and finishing coordinates of the line.
        // const fromX = /* */
        // const fromY = /* */
        // const toX = /* */
        // const toY = /* */
        const lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        const c = 30
        // TODO: Uncomment this, once you wrote the logic for the coordinates.
        // lineEl.setAttribute('d', `M ${fromX} ${fromY} C ${fromX} ${fromY + 10}, ${toX} ${toY - c}, ${toX} ${toY}`)

        svg.appendChild(lineEl)
      }
  })
}

/**
 * Handlers for panning.
 * It could probably be done as a hook.
 */
function addPan() {
  const graph = document.getElementById('graph-root')
  const bg = document.getElementById('bg')
  const svg = (document.getElementById('graph-svg') as unknown) as SVGSVGElement
  if (!graph || !bg || !svg) return

  document.body.addEventListener('pointerdown', onPointerDown)
  document.body.addEventListener('pointerup', onPointerUp)
  document.body.addEventListener('pointerleave', onPointerUp)
  document.body.addEventListener('pointermove', onPointerMove)

  let isPanning = false
  const offset = { x: 0, y: 0 }

  function onPointerDown (ev: PointerEvent) {
    const clickedOnNode = document.elementFromPoint(ev.clientX, ev.clientY)?.classList.contains('node')
    if (!clickedOnNode)
      isPanning = true
  }

  function onPointerUp () {
    isPanning = false
  }

  function onPointerMove (ev: PointerEvent) {
    if (!isPanning || !graph || !bg) return
    ev.preventDefault()

    offset.x += ev.movementX
    offset.y += ev.movementY
    graph.style.transform = `translate(${offset.x}px, ${offset.y}px)`
    bg.style.backgroundPosition = `${offset.x}px ${offset.y}px`

    svg.setAttribute('viewBox', `${-offset.x} ${-offset.y} ${svg.clientWidth} ${svg.clientHeight}`)
  }
}

// Some of this should be removed, the rest moved to <Graph/>
let graph: HTMLElement
export function createGraph(startingIntent: string, story: MergedAction[]) {
  if (!graph) {
    addPan()
    window.addEventListener('resize', () => {
      updateLines()
    })
  } else {
    graph.remove()
  }

  graph = renderIntentAction(startingIntent, story)
  document.getElementById('graph-root')?.appendChild(graph)
  updateTippy()
  addPan()
  updateLines()
}

/**
 * This should be the root for the rendered graph.
 * You will probably have to put the commented elements somewhere else.
 */
export function Graph() {
  return (
    <>
    {{/* <div id="graph-root" className="graph" />
          <svg id="graph-svg" className="graph-svg" version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" />
          <div id="bg" className="graph-bg" /> */}}
    </>
  )
}