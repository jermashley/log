import ReactMarkdown from 'react-markdown'
import HeadMeta from '@components/HeadMeta'

const About = () => {
  const markdownBlock = `Hey there! I'm Jeremiah and I'm currently working at [Prologue Technology](https://prologuetechnology.com/) as a Software Support Engineer. The past 15 years have given me the opportunity to work in a variety of environments ranging from live television production to web application development to photo and video production.
  
Drop by and say hi on [Twitter](https://twitter.com/jermashley)!
  `

  return (
    <>
      <HeadMeta
        title="About"
        description="Howdy! I'm Jeremiah and I design and develop websites and webapps. I am also a hobby photographer and video producer. Don't hesitate to shoot me a message or follow me on all the sites — I'd love to say hi!"
      />

      <h1 className="text-4xl text-coolGray-700 dark:text-coolGray-400 font-normal mb-3">
        About
      </h1>

      <article className="prose dark:prose-dark max-w-none">
        <ReactMarkdown source={markdownBlock} />
      </article>
    </>
  )
}

export default About
