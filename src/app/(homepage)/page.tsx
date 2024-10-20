import Head1 from "@/shared/headings/Head1";
import ContactMe from "./components/ContactMe";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <main className="prose mx-auto max-w-prose">
      <header>
        <Head1>Omkar Garde</Head1>
      </header>
      <article>
        <p className="text-lg">Hi, I am Omkar Garde, A frontend developer.</p>
        <p className="text-lg">
          I have worked at DXC Technology and TCS.(to reevaluate)
        </p>
        <WorkExperience />
        <ContactMe />
      </article>
    </main>
  );
}
