const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true

}
                                    //начальное значение Стейта
export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'HANDELCLICK': return state
        case 'JUMPTO': return state
    }
    return state;
}
