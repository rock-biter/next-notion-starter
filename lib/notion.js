const { Client } = require('@notionhq/client')

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
})

export async function getBlogPosts() {
	const databaseId = process.env.NOTION_DATABASE_ID
	const response = await notion.databases.query({
		database_id: databaseId,
	})
	return response.results.map((page) => ({
		id: page.id,
		title: page.properties['Title'].title[0].text.content,
		date: page.properties['Date'].date.start,
		tags: page.properties['Tags'].multi_select.map((tag) => tag.name),
		content: page.properties['Content'].rich_text[0].text.content,
	}))
}
