import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

class ChildCompoForProps extends Component {
    render() {
        return (
            <>
                <MDBCard>
                    <MDBCardImage src={this.props.imageData} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.anythingTitle}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default ChildCompoForProps;