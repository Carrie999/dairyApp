import React from 'react';
import {Link} from 'react-router-dom';
import './css/write.css';
import Bottom from './Bottom';
const Write = () => (
  <div className='wraper-write'>
    <div className='header'>写日迹</div>
    <div className='content'>
        <div className='contentTop'>
            <div className='mood'>悦</div>
            <div className='signature'>喜欢微笑的人。</div>
            <div className='signature2'>运气不会太差</div>       
        </div>
        <img className='flower' src={require('../static/images/flower.png')} alt="" /> 
        <div className='contentLittleLine'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
            <div className='four'></div>
            <div className='five'></div>
        </div>
        <div className='contentDetail'>
            素胚勾勒出青花笔锋浓转淡<br/>
            瓶身描绘的牡丹一如你初妆<br/>
            冉冉檀香透过窗心事我了然<br/>
            宣纸上走笔至此搁一半<br/>
            {/* 釉色渲染仕女图韵味被私藏<br/> */}
            周杰伦 青花瓷<br/>
            {/* 而你嫣然的一笑如含苞待放<br/> */}
        </div>
    </div>
    <Bottom />
  </div>
)
export default Write;