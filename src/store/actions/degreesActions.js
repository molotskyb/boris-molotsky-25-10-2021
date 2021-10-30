

export const ToggleFahrenheit = () => ({
  type: 'DEGREES_FAHRENHEIT',
})
export const ToggleCelsius = () => ({
  type: 'DEGREES_CELSIUS',
})
export const ToggleDegrees = (degrees) => {
  return async (dispatch) => {
    if (degrees === true) {
      dispatch(ToggleFahrenheit())
    } else {
      dispatch(ToggleCelsius())
    }
  }
}
