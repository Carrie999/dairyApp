import React from 'react';
import {Link} from 'react-router-dom';
// import './css/write.css';
const Bottom = () => (
    <div className='bottom'>
        <Link to='/write'><span>写</span></Link><div className='vertical'></div><Link to='/memory'><span>忆</span></Link><div className='vertical'></div><Link to='/memory'><span>调</span></Link>
    </div>
)
export default Bottom;