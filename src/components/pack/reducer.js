import * as rr from 'redux';
import { combineReducers } from 'redux';

/**
 * 默认的文件夹
 */
let folder = [
    {
        name: '项目F',
        path: '',
        id: 1,
    },
    {
        name: '控件库',
        path: '',
        id: 2,
    },
    {
        name: 'node_modules',
        path: '',
        id: 3,
    },
]

export default combineReducers({
    folder: (state = folder, action) => {

        if (action.type == 'add') { // 新增
            return state.concat([action.item]);
        } else if (action.type == 'remove') { // 删除
            return state.filter(item => item.id != action.item.id);
        } else if (action.type == 'change') { // 修改
            return state.map((item, index) => {
                if (index == action.index) return action.item;
                return item;
            })
        }
        return state;
    }
})