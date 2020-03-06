import React,{Component} from 'react';
import data from "./data.json"
import Header from './components/Header'
import Contents from './components/Contents'
import Sidebar from './components/Sidebar'
import './style.css'
var dataX = data;

class Content extends Component{
    constructor(props){
      super(props)
      this.state={
        data:data,
        add:{
            "title": "",
            "para": "",
            "comments": 0,
            "vote": 0,
            "type": "",
            "imgurl":"https://ph-files.imgix.net/719fe138-8598-46ec-8259-ef17ba46c0c2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
          }
      }
    }
    
      handle= {
        handleChangeTitle: (e) => {
            this.setState({ add:{
                "title":e.target.value,
                "para": this.state.add.para,
                "comments": 0,
                "vote": 0,
                "type": this.state.add.type,
                "imgurl":this.state.add.imgurl} });
          },
          handleChangePara: (e) => {
            this.setState({ add:{
                "title":this.state.add.title,
                "para": e.target.value,
                "comments": 0,
                "vote": 0,
                "type": this.state.add.type,
                "imgurl":this.state.add.imgurl} });
          },
          handleChangeType: (e) => {
            this.setState({ add:{
                "title":this.state.add.title,
                "para": this.state.add.para,
                "comments": 0,
                "vote": 0,
                "type": e.target.value,
                "imgurl":this.state.add.imgurl} });
          },
          handleChangeImage: (e) => {
            this.setState({ add:{
                "title":this.state.add.title,
                "para": this.state.add.para,
                "comments": 0,
                "vote": 0,
                "type": this.state.add.type,
                "imgurl":e.target.value} });
          }
      }

    increment =p=>{
        dataX.products.map(a=>{
            if (a.title==p.title){
             a.vote=a.vote+1;
             console.log('ok') 
            }
            else {

            }
        });   
        this.setState({data:dataX})
                     
      //  dataX.products[0].vote=dataX.products[0].vote+1;
   }
   addProduct =()=>{
    dataX.products.push(this.state.add)
    console.log(dataX);
    this.setState({add: {
     "title": "",
     "para": "",
     "comments": 0,
     "vote": 0,
     "type": "",
     "imgurl":"https://ph-files.imgix.net/719fe138-8598-46ec-8259-ef17ba46c0c2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
   }})
}

      render()  {
          return <div>
        <Header/>
         <main className="main">
            <Contents data={this.state.data} increment={this.increment}/>    
             <Sidebar data={this.state} addProduct={this.addProduct} handle={this.handle}/>    
         </main>    
     </div>
        
      }
    }

export default Content
