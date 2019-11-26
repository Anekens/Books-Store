import {connect} from 'react-redux'
import {setFilter} from "../../redux/reducers/books";
import {compose} from "redux";
import Filter from "./Filter";


const mapStateToProps = ({books}) => ({
      filterBy: books.filterBy
});


export default compose(
    connect(mapStateToProps, {setFilter}))(Filter);