import React from 'react';
import * as d3 from 'd3'

import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

import Scatter from '../scatter/scatter.component';

class ContainerComponent extends React.Component{
    constructor(){
        super();
        this.state = {
        }

    }

    componentDidMount(){


    }

    render(){
        // console.log(this.state)

            return(
                <Container fluid>
                    <Row xs={12} style={{height: '30vh'}}>
                        <Col id='shape' xs={6} style={{height: '30vh'}}>
                            <Scatter
                                value = {'contrails1'}                 
                            />                       
                        </Col>

                        <Col id='shape' xs={6} style={{height: '30vh'}}>
                            <Scatter
                                value = {'contrails2'}                 
                            />                       
                        </Col>

                    </Row>

                    <Row xs={12} style={{height: '3vh'}}>
                    </Row>

                    <Row xs={12} style={{height: '30vh'}}>
                        <Col id='shape' xs={6} style={{height: '30vh'}}>
                            <Scatter
                                value = {'contrails3'}                 
                            />                       
                        </Col>

                        <Col id='shape' xs={6} style={{height: '30vh'}}>
                            <Scatter
                                value = {'newData'}                 
                            />                       
                        </Col>

                    </Row>

                    <Row xs={12} style={{height: '3vh'}}>
                    </Row>

                    <Row xs={12} style={{height: '30vh'}}>
                        {/* <Col id='shape' xs={6} style={{height: '30vh'}}>
                            <Scatter
                                value = {this.state.value}                 
                            />                       
                        </Col> */}

                    </Row>


                </Container>
            )
        
    }
}

export default ContainerComponent ;