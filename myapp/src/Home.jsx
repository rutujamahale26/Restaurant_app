import React, { Component } from 'react'
import './table.css'
import Axios from 'axios'


export default class Home extends Component {
  constructor(){
    super()

    this.state=({
      name:'',
      email:'',
      phone:'',
      date:'',
      time:'',
      people:'',
      message:''
    })
  }
  // **************************************************
  saveForm=async(e)=>{
    e.preventDefault()
    alert('Congratulations dear your data successfully submitted');
    console.log(this.state)

    await Axios.post('http://localhost:3000/tableData', this.state)


  }


  render() {
    return (
      <>
       <div className="carousel slide"  id="mycarousel" data-bs-ride="carousel" data-interval="1000">
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <img src="../Assets/b1.jpg" className="d-block w-100" alt="..." style={{height:'550px'}}/>
              <div className='carousel-caption text-center my-5'>
                <div className='carousel-content'style={{marginBottom:'100px'}}>
                <h1 className=' px-5 '><span className='text-warning'>Delicious</span> Restaurant</h1>

                <p className='px-4 text-center' style={{height:'100px',width:'630px',textAlign:'justify',marginLeft:'130px'}}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div >
                  <button className='btn btn-outline-warning'style={{borderRadius:'30px'}} >Our Menu</button>
                <button className='btn btn-outline-warning mx-4 ' style={{borderRadius:'30px'}} >Book A Table</button>
                </div>
                </div>
              </div>
              
            </div>
            <div className="carousel-item">
              <img src="../Assets/b2.jpg" className="d-block w-100" alt="..." style={{height:'550px'}}/>
              <div className='carousel-caption text-center my-5'>
                <div className='carousel-content'style={{marginBottom:'100px'}}>
                <h1 className=' px-5 '><span className='text-warning'>Delicious</span> Restaurant</h1>

                <p className='px-4 text-center' style={{height:'100px',width:'630px',textAlign:'justify',marginLeft:'130px'}}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div >
                  <button className='btn btn-outline-warning'style={{borderRadius:'30px'}} >Our Menu</button>
                <button className='btn btn-outline-warning mx-4 ' style={{borderRadius:'30px'}}>Book A Table</button>
                </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../Assets/b3.jpg" className="d-block w-100" alt="..." style={{height:'550px'}}/>
              <div className='carousel-caption text-center my-5'>
                <div className='carousel-content'style={{marginBottom:'100px'}}>
                <h1 className=' px-5 '><span className='text-warning'>Delicious</span> Restaurant</h1>

                <p className='px-4 text-center' style={{height:'100px',width:'630px',textAlign:'justify',marginLeft:'130px'}}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div >
                  <button className='btn btn-outline-warning'style={{borderRadius:'30px'}} >Our Menu</button>
                <button className='btn btn-outline-warning mx-4 ' style={{borderRadius:'30px'}}>Book A Table</button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#mycarousel" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#mycarousel" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* ************************************************************************** */}
        {/* Book a Table form */}

        <div className="container-fluid" id='table'>
      <div className="col-md-12">
        <div className="row p-5 ">
          <div className="table">
            <div className="t1">
              <img
                src="../Assets/E5.jpg"
                alt=""
                style={{ width: "100%", height: "80vh" }}
              />
            </div>
            <div className="t2 ">
              <form className="row p-5 my-auto g-3 needs-validation" onSubmit={(e)=>this.saveForm(e)}>
                <div className="col-md-4">
                  <input type="text" className="form-control" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} placeholder="Your name" required/>
                   <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <input type="text" className="form-control" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} placeholder="Your Email" required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <div className="input-group has-validation">
                    <input type="text" className="form-control" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} placeholder="Your Phone" required/>
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <input type="date" className="form-control" value={this.state.date} onChange={(e)=>this.setState({date:e.target.value})} required/>
                </div>
                <div className="col-md-4">
                  <input type="time"  placeholder="" value={this.state.time} onChange={(e)=>this.setState({time:e.target.value})} className="form-control"/>
                </div>
                <div className="col-md-4">
                  <input type="number" className="form-control" value={this.state.people} onChange={(e)=>this.setState({people:e.target.value})} placeholder="#no of people" required/>
                    <div className="invalid-feedback">
                      Please provide a no of people.
                    </div>
                </div>
                <div className="col-md-12">
                  <textarea name="" placeholder="Message" className="form-control" value={this.state.message} onChange={(e)=>this.setState({message:e.target.value})} id=""style={{width:'100%',height:'150px'}}/>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-warning px-4" type="submit"> Book a Table</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      </>
    )
  }
}
