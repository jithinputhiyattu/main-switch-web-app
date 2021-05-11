
import React, { Component } from 'react'
import { MyDropDown } from "../drop-down/DropDown";
import ReactVirtualizedTable from "../table/Table";



class NewBill extends Component {
  render() {
    
    return (
      <div>
      <MyDropDown/>
      <ReactVirtualizedTable/>
      </div>
    
    );
  
}
}
export { NewBill };