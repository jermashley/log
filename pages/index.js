import HeadMeta from '@components/HeadMeta'
import {
  GITLAB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  TWITTER_PROFILE_URL,
} from '@lib/constants/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitlab,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import SpotifyNowPlaying from '@components/Spotify/SpotifyNowPlaying'

const Home = () => {
  return (
    <>
      <HeadMeta
        title="Home"
        description="Howdy! I'm Jeremiah and I design and develop websites and webapps. I am also a hobby photographer and video producer. Don't hesitate to shoot me a message or follow me on all the sites — I'd love to say hi!"
        imageUrl="https://media.graphcms.com/8F3BtEKMSaedw4kCLl17"
      />

      <section
        className="flex-grow flex flex-col justify-center items-start"
        style={{
          minHeight: `65vh`,
          height: `100%`,
        }}
      >
        <h1 className="text-6xl text-coolGray-700 dark:text-coolGray-200 font-light leading-loose">
          Howdy
        </h1>

        <p className="font-medium text-2xl text-coolGray-700 dark:text-coolGray-200 leading-relaxed mt-4 mb-6 w-4/5">
          Welcome to my space! My name is Jeremiah Ashley and I&apos;m a{` `}
          <span className="text-pink-500">developer</span> and{` `}
          <span className="text-pink-500">designer</span>.
        </p>

        <div className="grid gap-2 grid-flow-col">
          <a
            href={TWITTER_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800 text-xl text-coolGray-600 dark:text-coolGray-200 "
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            href={GITLAB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800 text-xl text-coolGray-600 dark:text-coolGray-200 "
          >
            <FontAwesomeIcon icon={faGitlab} />
          </a>

          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800 text-xl text-coolGray-600 dark:text-coolGray-200 "
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </section>

      <SpotifyNowPlaying />
    </>
  )
}

export default Home
