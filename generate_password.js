function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatePassword(options) {

  let collection = []
  let password = ''
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = lowerCase.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCase.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCase.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  collection = collection.filter(
    item => !options.excludeCharacters.includes(item)
  )

  if (collection.length === 0) return 'There is no valid character in your selection.'

  for (let i = 1; i <= options.length; i++) {
    password += sample(collection)
  }
  return password
}

module.exports = generatePassword

