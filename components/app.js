import React, { Component } from 'react'
import {  Button, FormGroup, FormControl, Input, InputGroup, Radio, Tab, Tabs, Table  } from 'react-bootstrap'
import { observer } from "mobx-react"
import items from '../controllers/index.js'
import itemStore from '../modules/panelStore'

console.log("items data", items.id3.productCode);

@observer
class App extends React.Component {

  constructor (props) {
    super(props)
  }

  createNew(e) {
      this.props.store.createItem(e.target.value)
  }

   handleChange(e) {
    var item = e.target.value;
    this.props.onChange(item);
  }

  filter(e) {
    this.props.store.filer = e.target.value
  }

  toggleComplete(item) {
    item.complete =!item.complete
  }

  render () {
    const { clearComplete, filter, filteredPanelOrder, items } = this.props.store

    const itemLis = filteredPanelOrder.map(
      items => (
        <li key={items.id}>
          <input type="checkbox" onChange={this.toggleComplete.bind(this, items)} value={items.complete} checked={items.complete} />
<<<<<<< HEAD
          {items.value}
=======
          {items}
>>>>>>> 9123bc8337b4aaf564e3813c935e35c3f1a5891f
          </li>
        ))
    
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Tabs defaultActiveKey={1} id="controlled-tab-example">
          <Tab eventKey={1} title="Country">
            <h2>Country Standard</h2>
            <form>
                <FormGroup>
                    <Radio name="country" data-toggle="Button" value="NZS45121997" onChange={this.createNew.bind(this)}>
                      New Zealand NZS4512: 1997
                    </Radio>
                    <Radio name="country" data-toggle="Button" value="NZS4512: 2003/2010" onChange={this.createNew.bind(this)}>
                      New Zealand NZS4512: 2003/2010
                    </Radio>
                    <Radio name="country" data-toggle="Button" value="AS4428.1" onChange={this.createNew.bind(this)}>
                      Australia AS4428.1
                    </Radio>
                    <Radio name="country" data-toggle="Button" value="AS7240.2" onChange={this.createNew.bind(this)}>
                      Australia AS7240.2
                    </Radio>
                </FormGroup>
            </form>
          </Tab>
          <Tab eventKey={2} title="System">
            <h2>Panel Selection</h2>
            <form>
                <Radio name="system" data-toggle="Button" value="F120A" onChange={this.createNew.bind(this)}>
                  <span>F120A</span>                      
                </Radio>
                <Radio name="system" value="F100A" onChange={this.createNew.bind(this)}>
                    <span>F100A</span>
                </Radio>
                <Radio name="system" value="F16E" onChange={this.createNew.bind(this)}>
                    <span>F16E</span>
                </Radio>
                <Radio name="system" value="F4" onChange={this.createNew.bind(this)}>
                    <span>F4</span>
                </Radio>
                <Radio name="system" value="F1" onChange={this.createNew.bind(this)}>
                    <span>F1</span>
                </Radio>
            </form>
          </Tab>
          <Tab eventKey={3} title="Detail">
            <h2>Panel Detail Type</h2>
          </Tab>
          <Tab eventKey={4} title="Power Supply">
            <h2>Additional Power Supply</h2>
          </Tab>
          <Tab eventKey={5} title="Amp">
            <h2>Amp</h2>
              <Radio name="amplifiers" value="50WApm" onChange={this.createNew.bind(this)}>
                <span>
                  Number of 50W amplifiers required:       
                </span>
                <select>
                  <option value="50W amp x 0">
                    0
                  </option>
                  <option value="1">
                    1
                  </option>
                  <option value="2">
                    2
                  </option>
                  <option value="3">
                    3
                  </option>
                  <option value="4">
                    4
                  </option>
                  <option value="5">
                    5
                  </option>
                  <option value="6">
                    6
                  </option>
                  <option value="7">
                    7
                  </option>
                  <option value="8">
                    8
                  </option>
                </select>
              <div className="50wAmp">
                <span>Is 50W apmlifier run by: </span>
                  <select name="amp_connection" size="1">
                    <option value="RS485" onChange={this.createNew.bind(this)}>
                      RS485
                    </option>
                    <option value="Bell Relay"onSelect={this.createNew.bind(this)}>
                      Bell Relay
                    </option>
                  </select>
                </div>
              </Radio>  
              <Radio name="amplifiers" value="20WApm"onChange={this.createNew.bind(this)}> 
                <span>
                  Number of 20W amplifiers required:       
                </span>
                <select onChange={this.createNew.bind(this)}>
                  <option value="0">
                    0
                  </option>
                  <option value="1">
                    1
                  </option>
                  <option value="2">
                    2
                  </option>
                </select>
              </Radio>
          </Tab>
          <Tab eventKey={6} title="LED">
            <h2>LED</h2>
            <form>
                <FormGroup>
                  <Radio name="LED" value="F100PDB12" onChange={this.createNew.bind(this)}>
                      12 Way Smart LED Display Bd for F100, F120, F16E:  
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Radio>
                  <Radio name="LED" value="F100PDB" onChange={this.createNew.bind(this)}>
                      8 Way LED Display Ext Board for F100, F120, F16E 
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Radio>
                  <Radio name="LED" value="F100ZDRLY">
                      8 Way Display Relay Extender Board 24V 
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Radio>                
                  <Radio name="LED" value="L485LAC">
                      RS485 LED Address Controller for F100, F120:  
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Radio>                
                  <Radio name="LED" value="LAC12W">
                      LED Zone Address Offset for 12-Way LED Board 
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Radio>                
                  <Radio name="LED" value="48WOC-IF">
                      RS485 to 48 Way Open Collector O/P Board 
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Radio>                
                  <Radio name="LED" value="L485LAC-S">
                      RS485 LED Address Controller for F100,F120, with STEADY outputs 
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Radio>                
                  <Radio name="LED" value="F4-RMAX">
                      Remote LED Mimic/Aux Relay Module 
                      <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Radio>
                </FormGroup>
            </form>
          </Tab>
          <Tab eventKey={7} title="Inter">
            <h2>Inter</h2>
          </Tab>
          <Tab eventKey={8} title="Misc">
            <h2>Misc</h2>
          </Tab>
          <Tab eventKey={9} title="Panel Items">
            <h2>Panel Items</h2>
           <form>
                <Radio name="system" data-toggle="Button" >
                  <span>F120A:   </span>       
                  <select onChange={this.handleChange} name="cabinet_size" size="1">
                      <option value="F120AF-3">FS 2 Loop Panel 900mm</option>
                      <option value="F120AR-3">
                          RS 2 Loop Panel 900mm
                      </option>
                  </select>                
                </Radio>
                <Radio name="system">
                    <span>F100A:   </span>
                    <select name="cabinet_size" size="1">
                        <option value="F100AF-3">
                            FS 2 Loop Panel 600mm
                        </option>
                        <option value="F100AR-3">
                            RS 2 Loop Panel 600mm
                        </option>
                        <option value="F100ATF-3">
                            FS 2 Loop Panel 900mm
                        </option>
                        <option value="F100ATR-3">
                            RS 2 Loop Panel 900mm
                        </option>
                    </select>
                </Radio>
                <Radio name="system">
                    <span>F16E:   </span>
                    <select name="cabinet_size" size="1">
                        <option value="F16EMF">F16e 8cct Mini FS</option>
                        <option value="F16EMR">F16e 8cct Mini RS</option>
                        <option value="F16ELF">F16e 8cct Large FS</option>
                        <option value="F16ELR">F16e 8cct Large RS</option>
                        <option value="F16ETF">F16e 8cct Tall FS</option>
                        <option value="F16ETR">F16e 8cct Tall RS</option>
                    </select>
                </Radio>
                <Radio name="system">
                    <span>F4   </span>
                    <select name="F4" size="1">
                        <option value="F4FS-3">
                            F4FS
                        </option>
                        <option value="F4RS-3">
                            F4RS
                        </option>
                        <option value="F4FS-3EA">
                            F4FS + EVAC20W12V
                        </option>
                        <option value="F4RS-3EA">
                            F4RS + EVAC20W12V
                        </option>
                    </select>
                </Radio>
                <Radio name="system">
                    <span>F1</span>
                    <select name="F1" size="1">
                        <option value="F1-3">
                            F1
                        </option>
                        <option value="F1-3EA">
                            F1 + EVAC20W12V
                        </option>
                    </select>
                </Radio>
            </form>
          </Tab>
          <Tab eventKey={10} title="Summary">
            <h2>Summary</h2>
          </Tab>            
        </Tabs>
        <hr/>
        <h2>Selection</h2>
        <ul>{itemLis}</ul>
        <Button>

          <a  href="#" onClick={clearComplete}>Remove ticked items</a>

        </Button>  
      </div>
    )
  }

}

export default observer(App)
