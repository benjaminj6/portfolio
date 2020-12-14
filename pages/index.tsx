import React from 'react'
import { Layout } from '../components/Layout'
import renderToString from 'next-mdx-remote/render-to-string'
import useHydrateMdx from 'next-mdx-remote/hydrate'
import fm from 'front-matter'
import fs from 'fs'
import {
  A,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  InlineCode,
  Li,
  Ol,
  P,
  Pre,
  Ul,
} from '../components/MarkdownTags'
import { Callout } from '../components/Callout'

const components = {
  a: A,
  p: P,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  pre: Pre,
  inlineCode: InlineCode,
  ol: Ol,
  ul: Ul,
  li: Li,
  hr: Hr,
  Callout,
}

const IndexPage = ({ mdxContent }) => {
  const hydrated = useHydrateMdx(mdxContent, { components })
  return (
    <Layout
      title="Hey, I'm Ben! 🔥"
      subtitle="I'm a front-end software engineer based out of Seattle"
    >
      {hydrated}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const introContent = fs.readFileSync('./content/intro.mdx', 'utf8')

  const { attributes: metadata, body } = fm(introContent)
  const mdxContent = await renderToString(body, { components })
  return {
    props: {
      metadata,
      mdxContent,
    },
  }
}

export default IndexPage
