import Board from '../components/Board';
import * as actions from '../actions/board';
import { IStoreState } from '../types';
import { ISetLetterPayload } from '../types/board';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ board }: IStoreState) {
    const { size, letters } = board;
    const { x, y } = size;
    return {
        letters,
        size,
    };
};

export function mapDispatchToProps(dispatch: Dispatch<actions.IBoardAction>) {
    return {
        setLetter: (payload: ISetLetterPayload) => dispatch(actions.setLetter(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
