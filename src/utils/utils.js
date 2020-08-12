export const getRandomId = max => {
  return new Date().getTime().toString() + Math.floor(Math.random() * Math.floor(max))
}
