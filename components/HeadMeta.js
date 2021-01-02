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

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e5476f" />
      <meta name="apple-mobile-web-app-title" content="Jeremiah Ashley" />
      <meta name="application-name" content="Jeremiah Ashley" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default HeadMeta
