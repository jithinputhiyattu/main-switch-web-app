import { Component } from "react";
import { Table, Row, Col, Button, Container , Dropdown} from "react-bootstrap";
import { MyDropDown } from "../drop-down/DropDown";


class NewBill extends Component {
  render() {
    return (
      <Row>
        <Col>
          <MyDropDown/>
          <h3>Item</h3>
        </Col>

        <Col>
          <h3>Unit</h3>
        </Col>

        <Col>
          <h3>Price per unit</h3>
        </Col>

        <Col>
          <Button className="add">Add</Button>
        </Col>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SI No.</th>
              <th>Item</th>
              <th>unit</th>
              <th>Price Per Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    );
  }
}
export { NewBill };