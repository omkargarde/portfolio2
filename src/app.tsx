import type { Component } from 'solid-js'
import { Suspense } from 'solid-js'

const App: Component = (props: { children: Element }) => {
  return (
    <>
      <main>
        <Suspense>{props.children}</Suspense>
      </main>
    </>
  )
}

export default App
