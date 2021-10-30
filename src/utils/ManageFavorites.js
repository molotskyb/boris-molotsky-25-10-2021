export const getFavorites = () => {
  var data = localStorage.getItem('favorites')
  return data ? JSON.parse(data) : []
}

export const addFavorite = (location) => {
  const savedLocations = getFavorites()
  localStorage.setItem(
    'favorites',
    JSON.stringify([...savedLocations, location])
  )
}

export const removeFavorite = (key) => {
  let savedLocations = getFavorites()
  savedLocations = savedLocations.filter((location) => key !== location.key)
  localStorage.setItem('favorites', JSON.stringify(savedLocations))
}

export const checkIfFavoriteExist = (key) => {
  let savedLocations = getFavorites()
  const checkFavorites = savedLocations.filter((x) => key === x.key)
  return !checkFavorites.length ? false : true
}
