import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {

    el = document.createElement('div');
    back = document.createElement('div')
    componentDidMount(){
        document.body.appendChild(this.el);
        this.el.appendChild(this.back)
        this.el.classList.add('portal');
        this.back.classList.add('portal-background')
        document.body.style.overflowY = "hidden";
    }

    componentWillUnmount(){
        document.body.style.overflowY = "scroll";
        document.body.removeChild(this.el);
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default Portal