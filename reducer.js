export const reducer = (state = { hello: 'https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif' }, action) => {
  switch (action.type) {
    case 'LOADED':
      return {
        hello: action.hello
      }

    default: return state
}
  }