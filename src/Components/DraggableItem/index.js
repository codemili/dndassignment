import React, { Component } from 'react'

export default class DraggableItem extends Component {

   constructor(props){
      super(props);
   }

   drag = (e) => {
      e.dataTransfer.setData('transfer', e.target.id);
   }

   noAllowDrop = (e) => {
      e.stopPropagation();
   }


   render() {
      return (
         <div id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop} style={this.props.style}>
            {this.props.children}            
         </div>
      )
   }
}
