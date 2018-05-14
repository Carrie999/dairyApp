import React from 'react';
import {Link} from 'react-router-dom';
import './css/memory.css';
import Bottom from './Bottom';
const Memory = () => (
  <div className='wraper-memory'>
    <div className='header'>回忆</div>
    <div className='content-memory'>
        <div className='content-memory-header'>随机</div>
        <div className='wraper-meomory'>
            <span className='content-memory-date oneDate'>五月廿五</span>
            <div className='content-memory-title one'>池</div>
        </div>
        <div className='content-memory-title two'>夏</div>
        <div className='content-memory-date twoDate'>十二三</div>        
        <div className='content-memory-title three'>殇</div>
        <div className='content-memory-date threeDate'>六月廿三</div>
        <div className='wraper-meomory-2'>
            <div className='content-memory-title four'>简</div>
        </div>
        <div className='content-memory-date fourDate'>六月廿五</div>
        <div className='heng1'></div>
        <div className='heng2'></div>
        <div className='shu'></div>
        <img className='tree' src={require('../static/images/tree.png')} alt="" /> 
    </div>
    <Bottom />
    {/* <div className='bottom'>
        <span>写</span><div className='vertical'></div><span>忆</span><div className='vertical'></div><span>调</span>
    </div> */}
  </div>
)
export default Memory;