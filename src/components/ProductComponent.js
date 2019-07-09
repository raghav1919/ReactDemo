import React, { Component } from "react";

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    // 1. state declaring data members for the application
    this.state = { 
      Categories: ["Electronics", "Electrical", "Civil", "Food"],
      ProductId: 0,
      ProductName: "",
      Price: 0,
      CategoryName: "",
      Products: [],
      Product: {
        ProductId: 0,
        ProductName: "",
        Price: 0,
        CategoryName: ""
      },
      TableColumnHeaders: []
    };
    this.generateTableColumnsHeaders();
    // self-binding for methods in constructor for Component
    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handleCategoryNameChanged = this.handleCategoryNameChanged.bind(this);
  }
  // 2. method to load Product state object and push all its properties
  // in TableColumnHeaders array
  generateTableColumnsHeaders() {
    for (let p in this.state.Product) {
      console.log(p);
      this.state.TableColumnHeaders.push(p);
    }
  }
  // 3. method to handle changed event for all input elements
  handleInputChanges(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // 4. method which is bind with the change event of select element
  // the call back os used for setState() method to read value of the selected option 
  handleCategoryNameChanged(e) {
    this.setState({ [e.target.name]: e.target.value });
    // the callback for "setState" will commit the
    // value selection from "select" element
    //console.log("CategoryName"+this.state.CategoryName);    
    //this.setState({ CategoryName: e.target.value }, function() {
     // this.callBackValue(this.state.CategoryName);
   // });
  } 
  //5. clear values for all inputs
  clearInputs() {
    this.setState({ ProductId: 0 });
    this.setState({ ProductName: "" });
    this.setState({ Price: 0 });
    this.setState({ CategoryName: "" });
  }
  // 6. the save() method
  save() {
    // 6a. fact is setState() cannot set the values for Array
    // Define a temp array
    let tempArray = this.state.Products.slice();
    // 6b Push Data in array
    tempArray.push({
      ProductId: this.state.ProductId,
      ProductName: this.state.ProductName,
      Price: this.state.Price,
      CategoryName: this.state.CategoryName
    });
    // 6c. set the State on Products array based on tempArray
    this.setState({ Products: tempArray });
  }
 // 7. the callback function which may use the selected category name
  callBackValue(val) {}
  // 8. the method to print selected product from the table
  // this will set state values  
  print(data) {
    this.setState({ ProductId: data.ProductId });
    this.setState({ ProductName: data.ProductName });
    this.setState({ Price: data.Price });
    this.setState({ CategoryName: data.CategoryName });
  }
  // 9. render method
  render() {
    return (
<div className="container">
        <div className="form-group">
          <label htmlFor="ProductId">Product Id</label>
          <input
            type="text"
            className="form-control"
            value={this.state.ProductId}
            onChange={this.handleInputChanges}
            name="ProductId"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ProductName">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={this.state.ProductName}
            onChange={this.handleInputChanges}
            name="ProductName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Price">Product Price</label>
          <input
            type="text"
            className="form-control"
            value={this.state.Price}
            onChange={this.handleInputChanges}
            name="Price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="CategoryName">Category Name</label>
          <select
            className="form-control"
            value={this.state.CategoryName}
            onChange={this.handleCategoryNameChanged}
            name="CategoryName"
          >
            {this.state.Categories.map((val, i) => (
                <Options key={i} data={val} />
            ))}
          </select>
        </div>
        <div className="form-group">
          <input
            type="button"
            value="New"
            onClick={this.clearInputs.bind(this)}
            className="btn btn-default"
          />
          <input
            type="button"
            value="Save"
            onClick={this.save.bind(this)}
            className="btn btn-success"
          />
        </div>
        <hr />
        <div>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {this.state.TableColumnHeaders.map((val, i) => (
                  <TableHeaders key={i} column={val} />
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.Products.map((val, i) => (
                <TableRow
                  key={i}
                  prd={val}
                  selectedRow={this.print.bind(this)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
  }
}
// 10. the reusable Options component, that will be used for
// select
class Options extends Component {
  render() {
    return(
    <option value={this.props.data}>{this.props.data}</option> )}
    }
// 11. the component to display table headers
class TableHeaders extends Component {
  render() {
    return(
<td>{this.props.column}</td>)}
}
// 12. component to display table rows
// this component also contains 'selectedData()' method
// this method calls the 'selectedRow()' method and passes selected product to it.
// the 'selectedData()' method will be executed
// when the click event is fired on the table-row   
class TableRow extends Component {
  selectedData() {
    this.props.selectedRow(this.props.prd);
  }
  render() {
    return (
<tr onClick={this.selectedData.bind(this)}>
        <td>{this.props.prd.ProductId}</td>
        <td>{this.props.prd.ProductName}</td>
        <td>{this.props.prd.Price}</td>
        <td>{this.props.prd.CategoryName}</td>
      </tr>
  );
  }
}
 
export default ProductComponent;