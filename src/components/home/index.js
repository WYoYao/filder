import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';


export default () => (
    <div className='home'>
        <div>
            <Link to='/pack'>
                <Button type="primary">打包文件</Button>
            </Link>
        </div>
    </div>
)