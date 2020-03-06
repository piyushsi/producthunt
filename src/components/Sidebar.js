import React from 'react'
import Form from './Form'


const Sidebar = (props)=> {
    return <div className='main_2'>
    <h3>Makers working Today</h3>
    <div className="main_2_1">
    {props.data.data.c.map(a=>{
         return (
            <div className="img_user" dangerouslySetInnerHTML={{ __html: a }} />
          );
    })}
    <hr/>
    <h3>Start Working Now</h3>
    
    </div>
    <h3>Product Hunt Radio</h3>
    <div className="main_2_1 main_2_2">
        <div><b>How to grow and monetize communities with Jill Salzman</b></div>
        <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg" class="playIcon_465b6"><g fill="none" fill-rule="evenodd"><path d="M17.5 35C27.165 35 35 27.165 35 17.5S27.165 0 17.5 0 0 7.835 0 17.5 7.835 35 17.5 35zm-3.71-24.57a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z" fill="#FFF"></path><path d="M13.79 10.43a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z" fill-opacity=".8" fill="#545656"></path></g></svg>
        <img src="https://ph-static.imgix.net/radio/ph_radio_cat.png?auto=format&auto=compress&w=90"/>
    </div>
    <h3>Newsletter</h3>
    <div className="main_2_1 main_2_3">
        <img src='https://ph-files.imgix.net/742f9303-ea31-4ab8-89fa-664e6be69029?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=290&h=110&fit=clamp'/>
        <div>Remote teams, this is for you</div>
        <hr/>
        <span><b>Get the best new products in your inbox, every day 👇</b></span>
        <input placeholder="Your email"></input>
        <button><b>SUSCRIBE</b></button>
    </div>
    <h3>Add products here</h3>
    <Form  x={props}/>
</div>   
}

export default Sidebar;