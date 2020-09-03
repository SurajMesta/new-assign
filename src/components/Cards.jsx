import React from 'react'

export const Cards = (props) => {
    const{datas:{_id,poster,genre,director,title,stars,language,pageViews,totalVoted}}=props
    // console.log(datas)

//     return (

//         <div className="card-div">

// <div key={_id} >

// <div className="vote-div" >

// <div className="container">
//   <div className="col-md-2 col-xs-12">
//       <div className="row text-center">
//           <button  ><i className="fas fa-arrow-alt-circle-up fa-2x"></i></button>
//       </div>
//       <div className="row text-center">
// <span>{totalVoted}</span>
//       </div>

//       <div className="row text-center">
//           <button><i className="fas fa-arrow-alt-circle-down fa-2x"></i></button>
//       </div>
//       <div className="row text-center">
//           <p>Votes</p>
//       </div>
//   </div>


//   <div className="col-md-4 col-xs-12" style={{padding:'5px'}} >

//       <div className="img-div">
//       <img style={{width:'200px',height:"100px",float:'left'}}src={poster} alt="" />
// <p className="text-center">{title}</p>

    
//      <p className="text-center">Genere:&nbsp;{genre}</p>
//      <p className="text-center">Director:&nbsp; {director.map((data)=>{
//          return data
//      })}</p>
      
//       <p className="text-center">Starring:&nbsp;{stars.map((data)=>{
//           return data
//       })}</p>
//       <p>Language:{language}</p>
//      <p>{pageViews} views | Voted by {totalVoted} People</p>
//       </div>

//   </div>


//  </div>
//  <div className="col-md-4 col-xs-12 trailer">
//       <button>Watch Trailer</button>
//   </div>

//     </div> 
// </div>

//         </div>
       
//     )

return(
    <React.Fragment>
          <div className="main-div">

<div className="vote-div">

<button  ><i className="fas fa-arrow-alt-circle-up fa-2x"></i></button>
<span style={{textAlign:"center"}}>{totalVoted}</span>
<button><i className="fas fa-arrow-alt-circle-down fa-2x"></i></button>
<p style={{textAlign:'center'}}>Votes</p>
</div>


<div className="img-div">
    <img src={poster} alt="img" />
</div>

<div className="info-div">

    <div className="inn-div">
    <p>{title}</p>
<p>Genre:&nbsp; {genre}</p>
<p>Director:&nbsp;  {director.map((data)=>{
return data
})}</p>

<p >Starring:&nbsp;{stars.map((data)=>{
  return data
})}</p>

<p>Language:{language}</p>
<p>{pageViews} views | Voted by {totalVoted} People</p>
    </div>


</div>



</div>

<div className="butt-div">
<button>Watch-Trailer</button>
</div>
    </React.Fragment>
  
)
}
