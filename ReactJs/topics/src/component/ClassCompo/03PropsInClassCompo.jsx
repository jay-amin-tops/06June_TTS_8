import React, { Component } from 'react';
import ChildCompoForProps from './04ChildCompoForProps.jsx';
import Image2 from "./../../2.webp" 

class PropsInClassCompo extends Component {

    render() {
        return (
            <div>
                {/* <img src={Image2} alt="" /> */}
                {/* <ChildCompoForProps /> */}
                <div className="row">
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps anythingTitle ="Product1" imageData='https://mdbootstrap.com/img/new/standard/nature/184.webp'/>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps anythingTitle ="My Product" imageData={Image2} />
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps anythingTitle ="Product Something" imageData="images/1.webp"/>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps imageData={process.env.PUBLIC_URL + 'images/1.webp'}/>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps imageData="test"/>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps />
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps />
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-3">
                        <MDBCard>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-lg-3">
                        <MDBCard>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-lg-3">
                        <MDBCard>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-lg-3">
                        <MDBCard>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default PropsInClassCompo;