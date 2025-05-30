import { Index, Show } from 'solid-js'
import { work } from '../data/work'

export default function Home() {
  return (
    <section>
      <header>
        <h1>Hi, I'm Omkar garde</h1>
        <p>I'm a front-end developer with almost 4 years of experience. I am very passionate about implementing interfaces with attention to accessibility and UX.</p>
      </header>
      <section>
        <header>
          <h2>Work Experience</h2>
        </header>
        <Show when={work === undefined}>something went wrong</Show>
        <ul>
          <Index each={work} fallback={<div>Loading...</div>}>
            {(item, index) => (
              <li data-index={index}>
                {item.name}
              </li>
            )}
          </Index>
        </ul>
      </section>
    </section>
  )
}
