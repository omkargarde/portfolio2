import { json } from "@sveltejs/kit";

async function getPosts() {
  const posts = []
  	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

}
export async function GET( ) {
  const posts = await getPosts();
  return json(posts)
}