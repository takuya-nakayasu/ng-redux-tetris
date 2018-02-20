import { IAppState } from './store';
import { Action } from 'redux';
import { TetrisActions,
         NumberMultidimensionalArrayAction,
         InsertShapeToCurrentAction, 
         NumberAction,
         BooleanAction} from './actions';

export function rootReducer(
    lastState: IAppState,
    action: Action
): IAppState {
    switch (action.type) {
        case TetrisActions.INIT_BOARD:
            return {
                board: (action as NumberMultidimensionalArrayAction).payload,
                isLose: lastState.isLose,
                current: lastState.current,
                currentX: lastState.currentX,
                currentY: lastState.currentY
            };
        case TetrisActions.INIT_CURRENT:
            return {
                board: lastState.board,
                isLose: lastState.isLose,
                current: (action as NumberMultidimensionalArrayAction).payload,
                currentX: lastState.currentX,
                currentY: lastState.currentY
            };
        case TetrisActions.INSERT_SHAPE_TO_CURRENT:
            const x = (action as InsertShapeToCurrentAction).payload.x;
            const y = (action as InsertShapeToCurrentAction).payload.y;
            const id = (action as InsertShapeToCurrentAction).payload.id;
            // 配列の値渡し
            const newCurrent = lastState.current.concat();
            newCurrent[y][x] = id;
            return {
                board: lastState.board,
                isLose: lastState.isLose,
                current: newCurrent,
                currentX: lastState.currentX,
                currentY: lastState.currentY
            };
        case TetrisActions.SET_CURRENT_X:
            return {
                board: lastState.board,
                isLose: lastState.isLose,
                current: lastState.current,
                currentX: (action as NumberAction).payload,
                currentY: lastState.currentY
            };
        case TetrisActions.SET_CURRENT_Y:
            return {
                board: lastState.board,
                isLose: lastState.isLose,
                current: lastState.current,
                currentX: lastState.currentX,
                currentY: (action as NumberAction).payload
            };
        case TetrisActions.SET_IS_LOSE:
            return {
                board: lastState.board,
                isLose: (action as BooleanAction).payload,
                current: lastState.current,
                currentX: lastState.currentX,
                currentY: lastState.currentY
            };
        default:
            return lastState;
    }
}