import Square from '../components/Square';
import * as actions from '../actions/board';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps() {
    // return {
    //     letters,
    // };
};

export function mapDispatchToProps(dispatch: Dispatch<actions.IBoardAction>) {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
