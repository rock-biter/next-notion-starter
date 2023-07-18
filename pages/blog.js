import { getBlogPosts } from '../lib/notion'

export const getStaticProps = async () => {
	const posts = await getBlogPosts()
	return {
		props: {
			posts,
		},
	}
}

export default function Blog({ posts }) {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.date}</p>
					<ul>
						{post.tags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	)
}
