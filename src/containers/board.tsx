import Board from '../components/board';
import * as actions from '../actions/board';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ board }: IStoreState) {
    const { size, letters } = board;
    const { x, y } = size;
    return {
        x,
        y,
        letters,
    };
};

export function mapDispatchToProps(dispatch: Dispatch<actions.IBoardAction>) {
    return {
        setX: (payload: number) => dispatch(actions.setX(payload)),
        setY: (payload: number) => dispatch(actions.setY(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
