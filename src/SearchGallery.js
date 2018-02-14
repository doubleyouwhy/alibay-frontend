import React, { Component } from 'react'


class Search extends Component{
    constructor(){
        super();
        this.state = {
            items: []
        } 
    }

    runSearch =()=>{
        console.log(this.searchInput.value)
        fetch ('/search',{
            method: "POST",
            body: this.searchInput.value
        })
        .then(x=>x.json())
        .then(y=> {
            console.log("this is y:" , y); 
            this.setState({hidden: true, search: true, items:y})    
       
    })}
    
    drawItem = (element, index, arr) => {
        return <div className = "product-preview" key={index}>
            <img onClick = {() => this.productPage(element)} className ="thumbnail" alt='boat' src= {element.image}/>
            <div>{element.prodName}</div>
            <div>{element.price}</div>
        </div>
    }
    render(){
        return(
            <div>
                <div className= "search-div">
                    <input className="search-bar" placeholder="search" ref={srch => this.searchInput = srch}></input>
                    <button onClick = {this.runSearch}>submit</button>
                </div>
                <div>Showing: {!this.props.searchInput?"All items":this.props.searchInput}</div>
                <div className = "gallery">
                    {this.props.items.map(this.props.drawItem)}                        
                </div>
            </div> 
        )      
    }   
  }


export default Search