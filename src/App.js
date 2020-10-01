import React, { Component } from 'react'
import Form from './Form';
import FormData from './FormData';
import {reactLocalStorage} from 'reactjs-localstorage';
class App extends Component {
  constructor()
  {
    super();
    this.documentData =reactLocalStorage.getObject('forms');
    let arr=[];
    for(let i=0;i< this.documentData.length;i++)
    {
      arr[i]=this.documentData[i];
    }
    if (localStorage.getItem('forms')) {
      this.state={
        forms:arr,
        tabValue:'true',
      }
    } else {
      this.state={
        forms:[],
        tabValue:'true'
      }
    } 
  }  
  changeTab=(value)=>{
    this.setState({
      tabValue:value
    })
  }
  render() {
    let tabValue=this.state.tabValue;
    const {forms}=this.state;
    return (
      <div>
          <div className='container tabs'>
              <div className={`tab ${tabValue?' ':'active-tabs'}`} onClick={()=>this.changeTab(true)}>
                  Form
              </div>
              <div className={`tab ${tabValue?'active-tabs':' '}`} onClick={()=>this.changeTab(false)}>
                  Table
              </div>
         </div>
         <br/>
         <div>
          {
            tabValue?
            (<Form forms={forms}/>)
            :(<FormData forms={forms}/>)
          }
        </div>
      </div>
        
      
    )
  }
}

export default App

