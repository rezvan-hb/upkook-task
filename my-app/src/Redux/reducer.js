const INIT = {
    detail_ID: 0,
    title: '',
    creation_date: '',
    short_description: '',
    description : ''
}

const appReducer = (state = INIT, action) => {
  switch (action.type) {
    case 'Get_Detail_Info':
      return {
        ...state,
        detail_ID : action.detail_ID,
        title : action.title ,
        creation_date : action.creation_date,
        short_description: action.short_description,
        description: action.description
    }
    
    default:
      return state
  }
}

export default appReducer
