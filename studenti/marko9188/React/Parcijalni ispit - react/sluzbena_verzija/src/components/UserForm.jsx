import React from "react";

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/esm/Button";



class UserForm extends React.Component {


    render (){
        return (
            <Form>
                <Form.Label>GitHub username:</Form.Label>
                <FormControl size="lg" placeholder="e.g. facebook" autoFocus>
                    
                </FormControl>
                <div>
                    <Button>GO!</Button>
                </div>
            </Form>
        );
    }
}

export default UserForm;