import axios from 'axios'
import WorkCard from '@components/WorkCard'
import HeadMeta from '@components/HeadMeta'

const Works = ({ works }) => {
  return (
    <>
      <HeadMeta
        title="Work Portfolio"
        description="Howdy! I'm Jeremiah and I design and develop websites and webapps. Here are some of my favorite projects — from web work to photo and video to print design."
      />

      <section className="w-full grid grid-cols-1 grid-flow-row gap-6">
        {works.map((work) => (
          <WorkCard work={work} key={work.id} />
        ))}
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const works = await axios
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
      query: `query {
        works {
          id
          title
          slug
          publishedAt
          updatedAt
          categories
          hero {
            id
            url(transformation: {
              image: {
                resize: {
                  width: 800,
                  height: 400,
                  fit: clip
                }
              }
              document: {
                output: {
                  format: webp
                }
              }
            })
          }
          summary
        }
      }`,
    })
    .then((res) => {
      return res.data.data.works
    })

  return {
    props: {
      works,
    },
  }
}

export default Works
