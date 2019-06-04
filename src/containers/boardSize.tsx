import BoardSize from '../components/boardSize';
import * as actions from '../actions/boardSize';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ board }: IStoreState) {
    const { size } = board;
    const { x, y } = size;
    return {
        x,
        y,
    };
};

export function mapDispatchToProps(dispatch: Dispatch<actions.IBoardSizeAction>) {
    return {
        onXChange: (payload: number) => dispatch(actions.setX(payload)),
        onYChange: (payload: number) => dispatch(actions.setY(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardSize);
