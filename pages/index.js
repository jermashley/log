import HeadMeta from '@components/HeadMeta'

const Home = () => {
  return (
    <>
      <HeadMeta
        title="Home"
        description="Howdy! I'm Jeremiah and I design and develop websites and webapps. I am also a hobby photographer and video producer. Don't hesitate to shoot me a message or follow me on all the sites — I'd love to say hi!"
      />

      <section
        className="flex-grow flex flex-col justify-center items-start"
        style={{
          minHeight: `60vh`,
          height: `100%`,
        }}
      >
        <h1 className="text-6xl text-coolGray-700 dark:text-coolGray-200 font-light leading-loose">
          Howdy
        </h1>

        <p className="font-medium text-2xl text-coolGray-700 dark:text-coolGray-200 leading-relaxed mt-4 w-4/5">
          Welcome to my space! My name is Jeremiah Ashley and I&apos;m a{` `}
          <span className="text-pink-500">developer</span> and{` `}
          <span className="text-pink-500">designer</span>.
        </p>
      </section>
    </>
  )
}

export default Home
