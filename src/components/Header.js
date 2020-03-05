import React from 'react'

const Header = ()=>{
    return  <header>
    <div className='head'>
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg> 
    <svg className='search' width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z" fill="#BBB" fill-rule="evenodd"></path></svg>
    <input className='input' placeholder="       Discover your next favourite thing...">
    </input>
    <a>Deals</a>
    <a>Jobs</a>
    <a>Makers</a>
    <a>Radio</a>
    <a>Ship</a>
    <a>...</a>
    <button className="btn_1">LOG IN</button>
    <button className="btn_2">SIGN UP</button>
    </div>
</header>
}
export default Header