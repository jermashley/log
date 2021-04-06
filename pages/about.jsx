import ReactMarkdown from 'react-markdown'
import HeadMeta from '@components/HeadMeta'
import SpotifyTopTracks from '@components/Spotify/SpotifyTop'
import axios from 'axios'

const About = ({ tracks }) => {
  const markdownBlock = `I currently work at [Prologue Technology](https://prologuetechnology.com) as a Software Support Engineer, front-end developer, and designer.  The past 15 years have given me the opportunity to work in a variety of environments ranging from live television production to web application development to photo and video production.  My current forte is web design and development.

I work mainly in the front-end, using [Vue.js](https://vuejs.org) or [React](https://reactjs.org) to build elegant, performant, and functional user interfaces. Recently, I have delved into learning [Next.js](https://nextjs.org). For the backend, I have focused primary on the [Laravel](https://laravel.com) PHP framework.

For video production, I have spent most of my career working with the industry-standard Adobe Suite; however, I am well-versed in other NLEs like DaVinci Resolve.  After Effects and The Foundry's Nuke are my go-tos for digital effects, compositing, and chroma keying.  While not proficient at making much more than cubes and donuts in 3D programs like MAXON's Cinema4D or Autodesk's Maya, I do find myself more at home lighting, texturing, and rendering 3D scenes.

Drop by and say hi on [Twitter](https://twitter.com/jermashley)!`

  return (
    <>
      <HeadMeta
        title="About"
        description="Howdy! I'm Jeremiah and I design and develop websites and webapps. I am also a hobby photographer and video producer. Don't hesitate to shoot me a message or follow me on all the sites — I'd love to say hi!"
        imageUrl="https://media.graphcms.com/8F3BtEKMSaedw4kCLl17"
      />

      <article className="mb-12 prose dark:prose-dark max-w-none">
        <ReactMarkdown source={markdownBlock} />
      </article>

      <SpotifyTopTracks tracks={tracks} />
    </>
  )
}

export const getStaticProps = async () => {
  const { items } = await axios
    .get(`${process.env.BASE_URL}/api/topTracks`)
    .then((res) => res.data)

  return {
    props: {
      tracks: items,
    },
  }
}

export default About
