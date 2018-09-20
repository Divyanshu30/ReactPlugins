import React, {Component}from 'react';
import "./Carasoul.css"
const ListItems = ( data, elementLength, isActive ) => {
   let a=[];
   if(elementLength>data.length)
    {for(let j=elementLength-5;j<=data.length;j++)
    {
        if(data[j])
        {
            a.push(data[j]);
        }
    }
    for(let j=0;j<elementLength-data.length;j++)
    {
            if(data[j]){a.push(data[j]);}
    }}
    else{
        for(let j=elementLength-5;j<elementLength;j++)
        {
            if(data[j])
            {
                a.push(data[j]);
            }
        }   
    }
    console.log(isActive);
    return(a.map(item =>  
<li key={item.id} className={isActive?"active":""}>{item.name}</li>))     
}
    

const ListData =[{"id":1, name:"item1"},{"id":2, name:"item2"},{"id":3, name:"item3"},{"id":4, name:"item4"},
                {"id":5, name:"item5"},{"id":6, name:"item6"},{"id":7, name:"item7"},{"id":8, name:"item8"},
                {"id":9, name:"item9"},{"id":10, name:"item10"},{"id":11, name:"item11"},{"id":12, name:"item12"}
            ];

// const widthSet=(noOfElementsInScreen)=>(100/noOfElementsInScreen)+"%";
// this is for adding no elements per slide; ie; setting the value of counter lisdata can be passed as a prop same as counter

class Carasoul extends Component { 
    constructor(props){
        super(props);
        this.state={
            counter:5,
            isActive:false,
            isModel:""
        }
    }
    componentDidMount()
    {
    this.slider();
    };
    
    slider(){
                this.loadCarsouel();
                this.setState({isActive:true});
                setTimeout(()=>this.loadCarsouel(),300);
                setTimeout(() =>  this.setState({isActive:false}),2000);
                setTimeout(()=>this.loadCarsouel(),3000);
                setTimeout((counter=this.state.counter) =>this.setState({counter:counter<ListData.length+4?(counter+1):5 }),3300)
                setTimeout(()=>this.componentDidMount(),3500);
            }
loadCarsouel(){
    this.setState({ isModel:ListItems(ListData, this.state.counter, this.state.isActive)});
    }
    render(){
       
   return( 
                <div className="hideScroll">
                    <div className="carasoul">
                        <ul>{this.state.isModel}</ul>
                    </div>
                </div>
            )}
                        
            }

                        export default Carasoul;