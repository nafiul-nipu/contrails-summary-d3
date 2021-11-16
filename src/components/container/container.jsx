import React from 'react';
import * as d3 from 'd3'

import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

import Scatter from '../scatter/scatter.component';

class ContainerComponent extends React.Component{
    constructor(){
        super();
        this.state = {value: 'contrails1'}
        this.dataTime = {
            contrails1: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            contrails2: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            contrails3: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            newData:[210,211,212,213,214,215,216,217,218,219]
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    componentDidMount(){
        // let up = parseInt(this.divs / 2)
        // this.setState({
        //     upper: up,
        //     lower: parseInt(this.divs - up)
        // })

    }
    handleOnChange(){
        var val = document.getElementById("selection").value;
        this.setState({value: val});
        // console.log(val)

    }

    render(){
        // console.log(this.state)
        if(this.state.value){
            console.log('container')
            console.log(this.state.value)
            return(
                <Container fluid>
                    <Row xs={12} style={{height: '5vh'}}>
                        <Col xs={12}>
                            <select id='selection' onChange={this.handleOnChange}>
                                <option value='contrails1'>contrails1</option>
                                <option value='contrails2'>contrails2</option>
                                <option value='contrails3'>contrails3</option>
                                <option value='newData'>newData</option>
                            </select>
                        </Col>
                    </Row>

                    <Row xs={12} style={{height: '30vh'}}>
                        {
                            this.dataTime[this.state.value].map((el, i) => {
                                // console.log(el, i)
                                if(i < 4){
                                    return(
                                        <Col id='shape' xs={3} style={{height: '30vh'}}>
                                        <Scatter
                                            key = {`${this.state.value}-${el}`}
                                            folder ={this.state.value}     
                                            time={el}    
                                            id={i}                      
                                        />                            
                                        </Col>
                                    )                                    

                                }
                            })
                        } 

                    </Row>

                    <Row xs={12} style={{height: '30vh'}}>
                        {
                            this.dataTime[this.state.value].map((el, i) => {
                                // console.log(el, i)
                                if(i > 3 && i < 8){
                                    return(
                                        <Col id='shape' xs={3} style={{height: '30vh'}}>
                                        <Scatter
                                            key = {`${this.state.value}-${el}`}
                                            folder ={this.state.value}     
                                            time={el}      
                                            id={i}                    
                                        />                            
                                        </Col>
                                    ) 
                                }
                            })
                        } 

                    </Row>


                    <Row xs={12} style={{height: '30vh'}}>
                        {
                            this.dataTime[this.state.value].map((el, i) => {
                                // console.log(el, i)
                                if(i > 7){
                                    return(
                                        <Col id='shape' xs={3} style={{height: '30vh'}}>
                                        <Scatter
                                            key = {`${this.state.value}-${el}`}
                                            folder ={this.state.value}     
                                            time={el}      
                                            id={i}                    
                                        />                            
                                        </Col>
                                    ) 
                                }
                            })
                        } 

                    </Row>



                </Container>
            )
            
        }
        
    }
}

export default ContainerComponent ;