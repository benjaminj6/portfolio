import { jsx } from '@emotion/core'
import { Link } from './Link'
import { Tag } from './Tag'
import { Text } from './Text'
import { palette, spacing } from '../styles/theme'
import { aboveTablet } from '../styles/media'
import { Box } from './Box'
/** @jsx jsx */ jsx

interface PostListItemProps {
  href: string
  title: string
  tags?: string[]
  date: string
}

export const PostListItem = ({
  tags = [],
  title,
  href,
  date,
}: PostListItemProps) => {
  return (
    <Box
      paddingY="s"
      css={aboveTablet({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: 'auto auto',
        gridColumnGap: spacing.m,
      })}
    >
      <div>
        <Text
          variant={['caption', 'body']}
          css={{
            fontVariantNumeric: 'tabular-nums',
            color: palette.neutral_700,
            verticalAlign: 'sub',
          }}
        >
          {date}
        </Text>
      </div>

      <h2>
        <Link
          href="/blog/[slug]"
          as={href}
          css={{
            textDecoration: 'none',
            padding: spacing.xs,
            margin: spacing.xs * -1,
            ':hover, :focus': {
              textDecoration: 'underline',
            },
          }}
        >
          <Text variant="subtitle">{title}</Text>
        </Link>
      </h2>

      {tags.length > 0 && (
        <div css={{ gridRow: 2, gridColumn: 2 }}>
          {tags.map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      )}
    </Box>
  )
}