import React, { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        return (
             <input className =  {this.props.className} placeholder={this.props.placeholder} onChange={this.props.onChangeHandler}></input>
        )

    }
}
export default SearchBox;