import React, { useEffect, useState } from 'react'
import './contact.css'
import Axios from 'axios'

const Contact = () => {

  const [data,setdata]= useState({name:'', email:'', subject:'', message:''})

  // ************************************************
  const datahandler = (e) =>{
    const {name, value} = e.target;
    

    setdata({ ...data, [name]: value })
  }
  // console.log(data)

  // *********************
  const GetFormData = async(e) => {

    e.preventDefault();
    alert('Congrats Dear!!');
        console.log(data);

    await Axios.post(' http://localhost:3000/Userdata',data);


}

// ********************************************
// send data to server
const loadData=async()=>{
  const result=await Axios.get(' http://localhost:3000/Userdata')
  console.log(result)

}
useEffect(()=>{
  loadData()

})


  return (
    <>
    
    <div className="title">
    <center>
      <h2>Check Our <span className='text-warning'> Contacts</span></h2>
    </center>
    </div>
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24194.89157059023!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1724418328906!5m2!1sen!2sus" width="100%" height="450"  title=''></iframe>
    </div>

    <div className="details-box">
      <div className="detail_box1">
        <div className="title ">
          <h3 className='fw-bold'>Get in touch</h3>
          <p>Et id eius voluptates atque nihil voluptatem enim in tempore
             minima sit ad mollitia commodi minus.</p>
        </div>
        <div className="d_1">
          <div className="logo  ">
            <h5 ><i className="fa-solid fa-location-dot" ></i><pre className='fw-bold'> Location :</pre></h5>
            <p style={{marginLeft:'25px'}} > A108 Adam Street, New York, NY 535022</p>
          </div>
          <hr/>
          <div className="logo  ">
            <h5 ><i className="fa-solid fa-envelope"></i><pre className='fw-bold'> Email :</pre></h5>
            <p style={{marginLeft:'25px'}} > info@example.com</p>
          </div>
          <hr />
          <div className="logo  ">
            <h5 ><i className="fa-solid fa-mobile"></i><pre className='fw-bold'>  Call :</pre></h5>
            <p style={{marginLeft:'25px'}} >+1 5589 55488 55</p>
          </div>
          
          
        </div>
      </div>
      <div className="detail_box2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form action='' onSubmit={(e) => GetFormData(e)}>
                <div className="col-md-12">
                  <div className="row p-4">
                    <div className="col-md-6">
                      <input type="text" className='form-control' name='name' value={data.name} onChange={(e) => datahandler(e)} placeholder='Your name' />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className='form-control' name='email' value={data.email} onChange={(e) => datahandler(e)} placeholder='Your email' />
                    </div>
                    <div className="col-md-12 my-3">
                      <input type="text" className='form-control' name='subject' value={data.subject} onChange={(e) => datahandler(e)} placeholder='Subject' />
                    </div>
                    <div className="col-md-12 my-2" id='message'>
                      <textarea name="message" placeholder='Your message' value={data.message} onChange={(e) => datahandler(e)}  style={{height:'250px',width:'100%',borderRadius:'10px',padding:'20px'}}/>
                    </div>
                    <div className='col-md-12 my-3'>
                      <center><button className='btn btn-warning px-5 my-2 ' >Send Message</button></center>

                    </div>
                  </div>
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

export default Contact