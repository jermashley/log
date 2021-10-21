import HeadMeta from '@components/HeadMeta'
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  TWITTER_PROFILE_URL,
} from '@lib/constants/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <>
      <HeadMeta
        title="Home"
        description="Howdy! I'm Jeremiah and I design and develop websites and webapps. I am also a hobby photographer and video producer. Don't hesitate to shoot me a message or follow me on all the sites — I'd love to say hi!"
        imageUrl="https://media.graphcms.com/8F3BtEKMSaedw4kCLl17"
      />

      <section className="flex-grow flex flex-col justify-center items-start min-h-[65vh] h-full">
        <h1 className="text-6xl font-light leading-loose text-coolGray-700 dark:text-coolGray-200">
          Howdy
        </h1>

        <p className="w-4/5 mt-4 mb-6 text-2xl font-medium leading-relaxed text-coolGray-700 dark:text-coolGray-200">
          Welcome to my space! My name is Jeremiah and I&apos;m a{` `}
          <span className="text-pink-500">developer</span> and{` `}
          <span className="text-pink-500">designer</span>.
        </p>

        <div className="grid grid-flow-col gap-2">
          <a
            href={TWITTER_PROFILE_URL}
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center p-2 text-xl transition-colors duration-300 bg-transparent border border-transparent rounded hover:bg-coolGray-100 dark:hover:bg-coolGray-800 hover:border-coolGray-100 dark:hover:border-coolGray-800 text-coolGray-600 dark:text-coolGray-200 "
          >
            <FontAwesomeIcon icon={faTwitter} fixedWidth />
          </a>

          <a
            href={GITHUB_PROFILE_URL}
            aria-label="Github"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center p-2 text-xl transition-colors duration-300 bg-transparent border border-transparent rounded hover:bg-coolGray-100 dark:hover:bg-coolGray-800 hover:border-coolGray-100 dark:hover:border-coolGray-800 text-coolGray-600 dark:text-coolGray-200 "
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth />
          </a>

          <a
            href={LINKEDIN_PROFILE_URL}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center justify-center p-2 text-xl transition-colors duration-300 bg-transparent border border-transparent rounded hover:bg-coolGray-100 dark:hover:bg-coolGray-800 hover:border-coolGray-100 dark:hover:border-coolGray-800 text-coolGray-600 dark:text-coolGray-200 "
          >
            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
          </a>
        </div>
      </section>

      {/* <SpotifyNowPlaying /> */}
    </>
  )
}

export default Home
