import React, { Component } from 'react'
import {  Button, FormGroup, FormControl, Input, InputGroup, Radio, Tab, Tabs, Table  } from 'react-bootstrap'
// import {Tabs, Tab} from 'react-bootstrap-tabs';

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Tabs defaultActiveKey={1} id="controlled-tab-example">
          <Tab eventKey={1} title="Country">
            <h2>Country Standard</h2>
            <form>
                <Radio >
                  New Zealand NZS4512:1997                    
                </Radio>
                <Radio >
                  New Zealand NZS4512: 2003/2010
                </Radio>
                <Radio >
                  Australia AS4428.1
                </Radio>
                <Radio >
                  Australia AS7240.2
                </Radio>
            </form>
          </Tab>
          <Tab eventKey={2} title="System">
            <h2>System</h2>
            <form>
                <Radio >
                  New Zealand NZS4512:1997                    
                </Radio>
                <Radio >
                  New Zealand NZS4512: 2003/2010
                </Radio>
                <Radio >
                  Australia AS4428.1
                </Radio>
                <Radio >
                  Australia AS7240.2
                </Radio>
            </form>
          </Tab>
          <Tab eventKey={3} title="Panel">
            <h2>Type of Panel</h2>
            <form>
                <Radio >
                  New Zealand NZS4512:1997                    
                </Radio>
                <Radio >
                  New Zealand NZS4512: 2003/2010
                </Radio>
                <Radio >
                  Australia AS4428.1
                </Radio>
                <Radio >
                  Australia AS7240.2
                </Radio>
            </form>
          </Tab>
          <Tab eventKey={4} title="Detail">
            <h2>Panel Detail Type</h2>
          </Tab>
          <Tab eventKey={5} title="Power Supply">
            <h2>Additional Power Supply</h2>
          </Tab>
          <Tab eventKey={6} title="Amp">
            <h2>Amp</h2>
          </Tab>
          <Tab eventKey={7} title="LED">
            <h2>LED</h2>
          </Tab>
          <Tab eventKey={8} title="Inter">
            <h2>Inter</h2>
          </Tab>
          <Tab eventKey={9} title="Misc">
            <h2>Misc</h2>
          </Tab>
          <Tab eventKey={10} title="Summary">
            <h2>Summary</h2>
          </Tab>            
        </Tabs>
        <hr/>
        <div className="checkoutCart">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Description</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>F16 Panel</td>
                <td>Panel enclosing for housing components and controllers</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Amp 42F</td>
                <td>Amp unit for power supply units</td>
                <td>4</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }

}

export default App
