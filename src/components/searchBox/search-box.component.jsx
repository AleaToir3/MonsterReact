import React, { Component } from 'react';



class SearchBox extends Component{

    render(){
       return (
        <div>
            <input placeholder="Entre votre recherche" onChange={this.props.onChangeHandler}></input>
        </div>
       )

    }
}
export default SearchBox;