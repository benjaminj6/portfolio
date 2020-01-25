/** @jsx jsx */
import { graphql } from 'gatsby'
import { Heading, Link, Section, Layout } from '../../components'
import { jsx } from '@emotion/core'
import formatPostPreviews from './formatPostPreviews'

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "//posts//" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          title: frontmatter {
            title
          }
          frontmatter {
            title
            publishDate: date(formatString: "x")
            formattedPublishDate: date(formatString: "MM-DD-YYYY")
            publisher
            link
          }
        }
      }
    }
  }
`

// component
const BlogLandingPage = ({ data, pageContext }) => {
  const formattedPostPreviews = formatPostPreviews(data)

  const { skip, limit, pageNumber } = pageContext
  const pageIndex = skip / limit + 2
  const posts = formattedPostPreviews
    .sort((current, next) => next.publishDate - current.publishDate)
    .slice(skip, skip + limit)

  return (
    <Layout>
      <Section
        css={{
          marginTop: '3rem'
        }}
      >
        <Heading large className="pageHeading">
          <h1>Blog</h1>
        </Heading>

        <ul css={{ margin: '1rem 0' }}>
          {posts.map(
            ({
              external,
              url,
              title,
              excerpt,
              formattedPublishDate,
              timeToRead,
              publisher,
              externalLink
            }) => (
              <li css={{ marginTop: '4rem' }} key={url}>
                <Heading css={{ margin: '0.75rem 0' }}>
                  <h2>
                    {external ? (
                      <Link external href={url}>
                        {title}
                      </Link>
                    ) : (
                      <Link to={url}>{title}</Link>
                    )}
                  </h2>
                </Heading>

                <p>{excerpt}</p>

                <h3
                  css={{
                    fontSize: '0.825rem',
                    margin: '1rem 0',
                    color: '#888',
                    fontFamily: 'var(--font-secondary)',
                    fontWeight: 'normal'
                  }}
                >
                  {formattedPublishDate}
                  {publisher && externalLink && (
                    <span
                      css={{
                        fontWeight: 'bold'
                      }}
                    >{` on ${publisher}`}</span>
                  )}{' '}
                  &mdash; {Math.ceil(timeToRead)} min. read
                </h3>
              </li>
            )
          )}
        </ul>
      </Section>

      <nav
        css={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          margin: '0 auto',
          padding: '1rem',
          gridColumnGap: '1rem'
        }}
      >
        {pageNumber && (
          <Link to={`/blog/${pageNumber > 2 ? pageNumber - 1 : ''}`}>
            newer posts
          </Link>
        )}
        {limit <= posts.length && (
          <Link to={`/blog/${pageIndex}`}>older posts</Link>
        )}
      </nav>
    </Layout>
  )
}

export default BlogLandingPage
