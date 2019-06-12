import SolveOptions from '../components/SolveOptions';
import * as actions from '../actions/solveOptions';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps( { solveOptions }: IStoreState) {
    return solveOptions;
};

export function mapDispatchToProps(dispatch: Dispatch<actions.ISolveOptionsAction>) {
    return {
        setForward: (payload: Boolean) => dispatch(actions.setSolveOptionForward(payload)),
        setBackward: (payload: Boolean) => dispatch(actions.setSolveOptionBackward(payload)),
        setDiagonal: (payload: Boolean) => dispatch(actions.setSolveOptionDiagonal(payload)),
        setZigzag: (payload: Boolean) => dispatch(actions.setSolveOptionZigzag(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SolveOptions);
