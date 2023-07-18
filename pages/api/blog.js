import { getBlogPosts } from '../../lib/notion'

export default async function handler(req, res) {
	const posts = await getBlogPosts()
	res.status(200).json(posts)
}
