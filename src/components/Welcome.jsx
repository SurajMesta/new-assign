import React from 'react'
import axios from 'axios'
import {Cards} from './Cards'
import {fetchAPI} from './fetchAPI'


let rdata;
export default class Welcome extends React.Component{

    state={
        results:[]
        
    }

    
    componentDidMount(){
      
      axios.post('https://hoblist.com/movieList',{
        category:"movies",
        language:"kannada",
        genre:"all",
        sort:"voting",
      }).then((response)=>{
          console.log(response.data.result)
          this.setState({
              results:response.data.result
          })
      }).catch(err=>{
          console.log(err)
      })
   


             
       
       
    
    }
    render(){
      
        return(
           
            <React.Fragment>
              <div className="container-fluid">
               <nav className="navbar navbar-default">
                  <div className="container">
                      <div className="navbar-header">
                          <a href="#" className="navbar-brand">Home</a>
                          <button className="navbar-toggle" data-toggle="collapse" data-target="#myDiv">
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                      </div>

                      <div className="navbar-collapse collapse" id="myDiv">
                     <ul className="nav navbar-nav navbar-right">
                         <li className="en-li"><a href="#">Company Info</a>
                         <div className="details" style={{color:'snow'}}>
                             <p>Company: GeekSynergy Technologies PVT Ltd</p>
                             <p>Address:Sanjaynagar, Bengaluru-56</p>
                             <p>Phone:9876543210</p>
                             <p>Email:xyz@gmail.com</p>
                         </div>
                         </li>
                     </ul>
                 </div>
                 </div> 

               
               </nav>
            </div>

            <div className="row">
                <div className="col-md-2 col-xs-12">
                    {this.state.results && this.state.results.map((data)=>{
                        return   <Cards datas={data} key={data._id}/>
                    })}
                   
                </div>
            </div>

            {/* <div className="container">
             <div className="col-md-2 col-xs-12">
                 <div className="row text-center">
                     <button  ><i class="fas fa-arrow-alt-circle-up fa-2x"></i></button>
                 </div>
                 <div className="row text-center">
        <span>{this.state.tot}</span>
                 </div>

                 <div className="row text-center">
                     <button><i class="fas fa-arrow-alt-circle-down fa-2x"></i></button>
                 </div>
                 <div className="row text-center">
                     <p>Votes</p>
                 </div>
             </div>

         
             <div className="col-md-4 col-xs-12" style={{padding:'5px'}} >
                 <div >
                 <img style={{width:'200px',height:"100px",float:'left'}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGi4ikdLQz1QeKir-BLWW5Q_vQUh5uJEnw4lMb7ei1f5H7IXeI&usqp=CAU" alt="" />
                 <p className="text-center">Rajakumara</p>
          
                <p className="text-center">Language: &nbsp; {this.state.language}</p>
                <p className="text-center">Genere:&nbsp;{this.state.genere}</p>
        <p className="text-center">Sort:&nbsp; {this.state.sort}</p>
                 </div>
          
             </div>
            </div> */}
            </React.Fragment>
            
        )
    }
}