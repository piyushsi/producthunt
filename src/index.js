import React from 'react';
import ReaactDOM from 'react-dom';
import './style.css'
import data from "./data.json"


function Content (props) {
    return (
        <main>
            <header >
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
            
            <main className="main">
                <div className="main_1">
                    <h2>Today</h2>
                    <span className='main_head'>POPULAR | NEWEST</span>
                    <div className='main_1_1'>
                    {data.products.map(p=>{ 

                       return <li className='products'>
                            <img src={p.imgurl}/>
                            <div className="products_1">
                                <h3 className='title'>{p.title}</h3>
                                <p className='para'>{p.para}</p>
                                <span className='comments'>
                                <svg className='svg_com' width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="grey" fill-rule="evenodd"></path></svg>
                                {p.comments}</span>
                                <span className='type'>{p.type}</span>
                            </div>
                            <div className="up_vote">^<br/>{p.vote}</div>
                        </li>
                    })}
                    </div>
                </div>
                <div className='main_2'>
                    <h3>Makers working Today</h3>
                    <div className="main_2_1">
                    {data.c.map(a=>{
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
                    <h3>Story of the week</h3>
                    <div className="main_2_1">
                        
                    </div>
                </div>
            </main>
            
        </main>
    )
}

ReaactDOM.render(<Content />,document.getElementById('root'));
