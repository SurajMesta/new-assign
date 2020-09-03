import React from 'react'

        import {Link} from 'react-router-dom'
        import {Alert} from 'react-alert'
      
        let pname, ppass, localuser,paresdUser;
       
        export default class Login extends React.Component{
            

            state={
                id:null,
                name:'',
                password:'',
                status:false
                
            }

        componentDidMount(){

             localuser=localStorage.getItem('user')
             paresdUser= JSON.parse(localuser)
            console.log(paresdUser)
              pname= paresdUser.name
              ppass= paresdUser.password
         
        
            console.log(pname,ppass)
    
         

        

        // if(pname!==this.state.name){
        //     console.log('Invalid')
        //     console.log(this.state.name)
        //     console.log(pname)
            
        
        // }
        // else if(ppassword!==this.state.password){
        //     console.log('invalid')
        //     console.log(this.state.password)
           
        // }
        }


       

      
           
          

        



            handleChange=(e)=>{
              
                    this.setState({
                        id:Math.random(),
                        [e.target.name]:e.target.value
                    })

                 

                    console.log(this.state)

            
               

               

            }

            handleSubmit=(e)=>{
                e.preventDefault()

              

                
           

            }

           
            render(){
             
           
                return(
                    <div className="text-center" style={{width:'400px',margin:'auto'}}>
                        <form onSubmit={(e)=>{
                            this.handleSubmit()
                        }}>
                      {/* <div id="al1" className="alert alert-dismiss alert-warning" role="alert" style={{visibility:'hidden'}}>
                          <p>Invalid Credentials</p>
                          <button className="close" data-dismiss="alert">&times;</button>
                      </div> */}
                        
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" id="name" name="name" className="form-control"  value={this.state.name} autoFocus   required maxLength="20"  onChange={(e)=>{
                                this.handleChange(e)
                            }}/>
                        </div>
        
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" id="password" value={this.state.password}  className="form-control"  maxLength="20" required  onChange={(e)=>{
                                this.handleChange(e) 
                            }}/>
                        </div>
        {/*  
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="email" className="form-control"   maxLength="30" required onChange={(e)=>{
                                this.handleChange(e)
                            }}/>
                        </div>
        
                        <div className="form-group">
                            <label htmlFor="">Phone No</label>
                            <input type="tel" maxLength="10" min="10" name="number" id="number"  className="form-control" required onChange={(e)=>{
                                this.handleChange(e)
                            }}/>
                        </div> */}
        
                        <div className="form-group">
                    <Link onClick={e=> (this.state.name!==pname || this.state.password!==ppass)? ( alert('Invalid Credentials') || e.preventDefault()):null }   to="/welcome" >
                                <button className="btn btn-md btn-success">Submit</button>
                                </Link>       
                            
                            
                        </div>
                        </form>
                    </div>
                )
            }}
          

            
            
            
