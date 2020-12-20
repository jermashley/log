import axios from 'axios'
import WorkCard from '@components/WorkCard'

const Works = ({ works }) => {
  return (
    <section className="w-full grid grid-cols-1 grid-flow-row gap-6">
      {works.map((work) => (
        <WorkCard work={work} key={work.id} />
      ))}
    </section>
  )
}

export const getStaticProps = async () => {
  const works = await axios
    .post(
      `https://api-us-east-1.graphcms.com/v2/ck88yjl9x01o801z91nyy7j2u/master`,
      {
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
      },
    )
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
