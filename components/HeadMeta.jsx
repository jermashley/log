import Head from 'next/head'
import { useRouter } from 'next/router'

const HeadMeta = ({ title, description, imageUrl }) => {
  const { pathname } = useRouter()
  const url = `${process.env.BASE_URL}${pathname}`
  const appendedTitle = title && ` | ${title}`
  const composedTitle = `Jeremiah Ashley${appendedTitle}`

  return (
    <Head>
      {/* Title Meta */}
      <title>{composedTitle}</title>
      <meta name="title" content={composedTitle} />
      <meta property="og:title" content={composedTitle} />
      <meta property="twitter:title" content={composedTitle} />

      {/* Description */}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
        </>
      )}

      {/* Social Meta */}
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="og:url" content={url} />
      <meta property="twitter:url" content={url} />

      {/* Image Meta */}
      {imageUrl && (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta property="twitter:image" content={imageUrl} />
        </>
      )}
    </Head>
  )
}

export default HeadMeta
