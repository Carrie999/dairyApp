import React from 'react';
import {Link} from 'react-router-dom';
import './css/login.css';
const Login = () => (
  <div className='wraper'>
    <div className='title'>
        <div className='titleText'><span className='ri'>日</span></div>
        <div className='titleText'><span className='ji'>迹</span></div>
    </div>
    <div className='loginInput'>
        <div className='circle'><span>注</span></div>
        <input className='nameInput' type="text" placeholder='你的名字'/>
        <input className='pwInput' type="password" placeholder='你的密码' />
    </div>
    <span className='reBackPW'>找回密码</span>

  </div>
)
export default Login;