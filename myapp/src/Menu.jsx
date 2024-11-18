import React, { Component } from "react";
import Card from './Card';

export default class Menu extends Component {
  constructor() {
    super();

    this.state=({
    All : true,
    Breakfast : true,
    Lunch : true,
    Dinner : true,
    })
  }

  //All Handler
   Breakfast_Handler=()=>{
    // alert('breakfast')
    this.setState({
      Breakfast: true,
      Dinner:false,
      Lunch:false

    })
   }

   Lunch_Handler=()=>{
    //  alert('lunch')
    this.setState({
      Breakfast: false,
      Dinner:false,
      Lunch: true

    })
   }

   Dinner_Handler=()=>{
    // 
    this.setState({
      Breakfast: false,
      Dinner:true,
      Lunch:false

    })
   }

   All_Handler=()=>{
    // 
    this.setState({
      Breakfast: true,
      Dinner:true,
      Lunch:true

    })
   }
  render() {
    //json data
    const breakfast = [
      {
        id: 1,
        img: "./Assets/m7.jpeg",
        name: "Bread Pizza",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$4.55",
      },
      {
        id: 2,
        img: "./Assets/m8.jpeg",
        name: "Coffee",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$4.95",
      },
      {
        id: 3,
        img: "./Assets/m9.jpeg",
        name: "Paratha",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$5.55",
      },
    ];

    const lunch = [
      {
        id: 1,
        img: "./Assets/m1.png",
        name: "Magnam Tiste",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$5.55",
      },
      {
        id: 2,
        img: "./Assets/m2.png",
        name: "Aut Luia",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$6.50",
      },
      {
        id: 3,
        img: "./Assets/m1.png",
        name: "Est Eligendi",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$8.55",
      },
    ];
    const dinner = [
      {
        id: 1,
        img: "./Assets/m4.png",
        name: "Eos Luibusdam",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$12.55",
      },
      {
        id: 2,
        img: "./Assets/m5.png",
        name: "Laboriosam Direva",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$12.55",
      },
      {
        id: 3,
        img: "./Assets/m6.png",
        name: "Eos Luibusdam",
        text: "Lorem ipsum dolor sit amet consectetur",
        price: "$9.55",
      },
    ];
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="head text-center" data-aos="zoom-in-right">
                <h2>
                 Check Our <span className="text-danger">Yummy Menu</span>
                </h2>
              </div>

              <div className="col-md-12 text-center">
               <button className="btn btn-primary px-4 my-3 fw-bold" onClick={()=>this.All_Handler()}>All </button>
               <button className="btn btn-danger px-4 my-3 fw-bold mx-5" onClick={()=>this.Breakfast_Handler()}>Brekfast </button>
               <button className="btn btn-warning px-4 my-3 fw-bold my-3" onClick={()=>this.Dinner_Handler()}>Dinner</button>
               <button className="btn btn-dark px-4 my-3 fw-bold mx-5" onClick={()=>this.Lunch_Handler()}>Lunch</button>
              </div>

              <div className="col-md-12">
                <div className="row">

                {
                  this.state.Dinner ?

                  dinner.map((val,index)=>{
                  return(
                    <div className="col-md-4"  data-aos="zoom-in">
                        <Card
                          img ={val.img}
                          name={val.name}
                          price={val.price}/>
                       </div>
                      )
                   }) : null
                }

                {
                  
                  this.state.Breakfast ?

                  breakfast.map((val,index)=>{
                    return(
                      <div className="col-md-4"   data-aos="zoom-in">
                         <Card
                          img ={val.img}
                          name={val.name}
                          price={val.price}/>
                      </div>
                    )
                  }) : null
                }

                {

                  this.state.Lunch ?
                  lunch.map((val,index)=>{
                    return(
                      <div className="col-md-4"  data-aos="zoom-in">
                         <Card
                          img ={val.img}
                          name={val.name}
                          price={val.price}/>
                      </div>
                    )
                  }) : null
                }

        
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


