import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { sync } from 'glob'

const articlesPath = path.join(process.cwd(), 'src/data/articles')

export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`)

  return paths.map((path) => {
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

export async function getArticleFromSlug(slug) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`)
    const source = fs.readFileSync(articleDir)
    const { content, data } = matter(source)
  
    return {
      content,
      frontmatter: {
        slug,
        excerpt: data.excerpt,
        title: data.title,
        publishedAt: data.publishedAt,
        ...data,
      },
    }
  }

  export async function getAllArticles() {
    const articles = fs.readdirSync(path.join(process.cwd(), 'src/data/articles'))
  
    return articles.reduce((allArticles, articleSlug) => {
      // get parsed data from mdx files in the "articles" dir
      const source = fs.readFileSync(
        path.join(process.cwd(), 'src/data/articles', articleSlug),
        'utf-8'
      )
      const { data } = matter(source)
  
      return [
        {
          ...data,
          slug: articleSlug.replace('.mdx', '')
        },
        ...allArticles,
      ]
    }, [])
  }