import React from 'react'


const Contents = (props)=>{
    return <div className="main_1">
    <h2>Today</h2>
    <span className='main_head'>POPULAR | NEWEST</span>
    <div className='main_1_1'>
    {props.data.products.map(p=>{ 

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
            <div className="up_vote"><span onClick={ ()=>props.increment(p)}>^</span><br/>{p.vote}</div>
        </li>
    })}
    </div>
</div>
}

export default Contents
