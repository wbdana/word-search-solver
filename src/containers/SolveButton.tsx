import SolveButton from '../components/SolveButton';
import * as actions from '../actions/results';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ results }: IStoreState) {
    return {

    };
};

export function mapDispatchToProps(dispatch: Dispatch<actions.IResultsAction>) {
    return {
        // @ts-ignore
        solveBoard: () => dispatch(actions.solveBoard()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SolveButton);