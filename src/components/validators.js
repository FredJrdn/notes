import React from 'react';
import { Form, Button, Icon, TextArea } from 'semantic-ui-react';

class validators extends React.Component {
    state = {
        data: {
            title: '',
            description: ''
        },
        loading: false,
        errors: {}
    };

    render() {
        const { data } = this.state;
        return (
            <Form>
                <Button primary> Super</Button>
            </Form>
        );
    }
}

export default validators;
/*
<Form widths='equal'>
    <Form.TextArea autoHeight placeholder='Add description' />
    <Button animated id="descriptionButton" color='teal'>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
            <Icon name='check' />
        </Button.Content>
    </Button>
</Form>
*/