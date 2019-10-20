import { connect } from 'react-redux'
import ShowDetail from '../ShowDetail'

const mapStateToProps = state => {
  console.log(state)
  return {
    detail_ID : state.detail_ID,
    title : state.title,
    creation_date : state.creation_date,
    short_description : state.short_description,
    description : state.description
  }
}

const ShowDetailContainer = connect(mapStateToProps)(ShowDetail)

export default ShowDetailContainer