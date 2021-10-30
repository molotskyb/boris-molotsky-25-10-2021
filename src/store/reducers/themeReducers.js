

export const themeReducer = (state = { theme: true }, action) => {
  switch (action.type) {
    case 'LIGHT_THEME':
      return { theme: true }
    case 'DARK_THEME':
      return { theme: false }
    default:
      return state
  }
}
