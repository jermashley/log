import axios from 'axios'

export default async (req, res) => {
  const getToken = axios
    .post(`https://accounts.spotify.com/api/token`, null, {
      params: {
        grant_type: `client_credentials`,
      },
      headers: {
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json`,
        'Authorization': `Basic ${Buffer.from(``).toString(`base64`)}`,
      },
      // auth: {
      //   username: `ebf8b1e6821841f09bc06e1f75c81f19`,
      //   password: `85d37565084f43b3be512fda320a46e8`,
      // },
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((e) => e)

  res.statusCode = 200
  res.setHeader(`Content-Type`, `application/json`)
  res.end(JSON.stringify({ data: await getToken }))

  // const spotifyRes = await axios
  //   .post(`https://accounts.spotify.com/api/token`, null, {
  //     params: {
  //       grant_type: `client_credentials`,
  //     },
  //     headers: {
  //       'Content-Type': `application/x-www-form-urlencoded`,
  //       'Accept': `application/json`,
  //       'Authorization': `Basic ${Buffer.from(
  //         `ebf8b1e6821841f09bc06e1f75c81f19:85d37565084f43b3be512fda320a46e8`,
  //       ).toString(`base64`)}`,
  //     },
  //     // auth: {
  //     //   username: `ebf8b1e6821841f09bc06e1f75c81f19`,
  //     //   password: `85d37565084f43b3be512fda320a46e8`,
  //     // },
  //   })
  //   .then((response) => {
  //     console.log(response)
  //     return response
  //   })
  //   .catch((e) => e)
}
