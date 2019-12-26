import React, {Component} from 'react';

class SideBar extends Component{
  constructor(){
    super()
  }

  render() {
    console.log(this.props.searchWord)

    return (
      <div> <iframe src="https://giphy.com/embed/jUwpNzg9IcyrK" width="300" height="300" frameBorder="0" className="giphy-embed" allowFullScreen /></div>
    );
  }
};


export default SideBar;
