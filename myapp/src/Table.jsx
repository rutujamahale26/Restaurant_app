import React, { Component } from 'react'
import './table.css';


export default class Table extends Component {
  constructor(){
    super()

    this.state=({
      data:''

    })
  }
  render() {
    
    return (
      <>
       <>
    <div className="container-fluid">
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
              <form className="row p-5 my-auto g-3 needs-validation" >
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Your name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Your Email"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Your Phone"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    id="validationCustom03"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <input type="time"  placeholder="" className="form-control"/>
                </div>
                <div className="col-md-4">
                  
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustom05"
                    placeholder="#no of people"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a no of people.
                  </div>
                </div>
                <div className="col-md-12">
                  
                    <textarea name="" placeholder="Message" className="form-control" id=""style={{width:'100%',height:'150px'}}/>
                 
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-warning px-4" type="submit">
                    Book a Table
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
      </>
    )
  }
}

