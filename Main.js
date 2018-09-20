import React, { Component } from 'react';
import Modal from './Modal';
import BackDrop from './BackDrop';
class Main extends Component {
    constructor() {
        super();
        this.state = {
             modalShow: false,
            // backDropShow: false,
           // transit: false,
           modSh:''
        }
  }

    onUserClick() {
    this.onModShow();
    this.setState({
        modalShow:true
    })
        setTimeout(()=> this.setState(this.onModShow()),200)
        
    }

onModShow(){
    this.setState({
        modSh:(<div>
                <BackDrop onClick={() => this.onModalClose()}/>
                <Modal styl={this.state.modalShow} onClick={() => this.onModalClose()} />
                </div>)
    })
}
onModalClose() {
    this.setState({
                modalShow: false
        });
        setTimeout(()=> this.setState(this.onModShow()),200);
        setTimeout(()=>this.setState({
            modSh:null
        }),800)
    }

    render() {
       let styl=this.state.modalShow ? { transform:'translateX(0%)'} : null;
        return (
            <div>
                <h1>Hello This Modal Develpoment</h1>
                <button onClick={() => this.onUserClick()}>Open Modal</button>
                {this.state.modSh}
            </div>
        );
    }
}

export default Main;