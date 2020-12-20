export const snakeToTitleCase = (string) => {
  let wordsArray = string.split(`_`)

  let transformedWords = wordsArray.map((word) => {
    let wordArray = [...word]

    wordArray = [
      wordArray[0].toUpperCase(),
      ...wordArray.slice(1, wordArray.length),
    ]

    wordArray = wordArray.join(``)

    return wordArray
  })

  transformedWords = transformedWords.join(` `)

  return transformedWords
}
