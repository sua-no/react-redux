import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
}

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     }
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);

export default connect(
    state => ({
        number: state.counter.number,
    }),
    // mapDispatchToProps 쓰지 않고 액션 생성함수를 컴포넌트의 props로 넘겨줌
    // dispatch => ({
        // increase: () => dispatch(increase()),
        // decrease: () => dispatch(decrease()),
    // }),

    // bindActionCreator 유틸 함수 사용하여 넘겨줌 (액션 생성 함수 여러개일 때!)
    // dispatch =>
    //     bindActionCreators(
    //         {
    //             increase,
    //             decrease,
    //         },
    //         dispatch,
    //     ),

    // 두번째 파라미터를 아예 객체 형태로 넣어주면  connect 함수가 내부적으로 bindActionCreators 작업을 대신해줌!!
    {
        increase,
        decrease,
    }
)(CounterContainer);