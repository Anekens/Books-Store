import {connect} from 'react-redux';
import Filter from './Filter';
import {setFilter, setSearchQuery} from "../redux/reducers/filter";

const mapStateToProps = ({filter}) => ({
    filterBy: filter.filterBy,
});

export default connect(mapStateToProps, {setFilter, setSearchQuery},)(Filter);
