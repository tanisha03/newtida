import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  FormText
} from "reactstrap";
import { Rating } from "react-rating";

class ModalEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Review</ModalHeader>
          <ModalBody>
            <div>
              <Form>
                <FormGroup>
                  <Label for="head">Add a Headline</Label>
                  <Input
                    type="text"
                    name="text"
                    id="head"
                    placeholder="What's most important to know"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="review">Write your review</Label>
                  <Input
                    type="text"
                    name="text"
                    id="review"
                    placeholder="What did you like or dislike?"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">Attach an image</FormText>
                </FormGroup>
              </Form>
              <Rating />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Submit
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalEx;
