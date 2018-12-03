import React from 'react';
import { connect } from 'react-redux';
import { Upload, List, Button, Icon } from 'antd';

export default connect(({ folder }) => {
    return {
        folder
    }
}, (dispatch) => {
    return {
        add(item) {
            dispatch({
                type: 'add',
                item
            })
        },
        remove(id) {
            dispatch({
                type: 'remove',
                item: { id }
            })
        },
        change(index, item) {
            dispatch({
                type: 'change',
                item,
                index
            })
        }
    };
})((argu) => {

    console.log(argu);

    let { folder, change } = argu;

    const changeHander = (item, e) => {
        let index = folder.indexOf(item);

        change(index, Object.assign({}, item, {
            path: e.file.path
        }));

        e.onSuccess();

        return true;
    }

    return (
        <div>
            <List
                className="demo-loadmore-list"
                loading={false}
                itemLayout="horizontal"
                loadMore={false}
                dataSource={folder}
                renderItem={item => (
                    <List.Item actions={
                        [<Upload showUploadList={false} customRequest={changeHander.bind(this, item)} directory>
                            <Button>
                                <Icon type="upload" />
                            </Button>
                        </Upload>]
                    }>
                        <span>{item.name}</span>
                        <span>路径:{item.path}</span>
                    </List.Item>
                )}
            />
            <div>
                <Button type="primary">下一步</Button>
                <Button onClick={() => console.log('取消')}>取 消</Button>
            </div>
        </div>
    );
})