
import { connect } from 'react-redux'
import Item from '../Item'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const ItemContainer = connect(mapDispatchToProps)(Item)

export default ItemContainer