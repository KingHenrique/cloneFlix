export const Types = {
  SET_SERIES: 'series/SET_SERIES',
}

export const Actions = {
  setSeries: currentSeries => {
    return {
      type: Types.SET_SERIES,
      payload: currentSeries,
    }
  },
}

const INITIAL_STATE = {
  currentSeries: null,
}

export default function SeriesRedux(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SERIES:
      return { ...state, currentSeries: action.payload }
    default:
      return state
      break
  }
}
