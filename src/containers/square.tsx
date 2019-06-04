import Square from '../components/square';
import * as actions from '../actions/letters';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ letters }: IStoreState) {
    return {
        letters,
    };
};

export function mapDispatchToProps(dispatch: Dispatch<actions.ILettersAction>) {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
