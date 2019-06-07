import ResultsList from '../components/ResultsList';
import * as actions from '../actions/results';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ results }: IStoreState) {
    const { words } = results;
    return {
        words,
    };
};

export function mapDispatchToProps(dispatch: Dispatch<actions.IResultsAction>) {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
