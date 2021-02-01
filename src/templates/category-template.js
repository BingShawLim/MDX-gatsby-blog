import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    pageContext: { category },
  } = props
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`Category / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetbyCategory($category: String) {
    categories: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          category
          date(formatString: "MMMM Do, YYYY")
          readTime
          slug
          title
          author
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        id
      }
    }
  }
`

export default CategoryTemplate
