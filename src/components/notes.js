import React from 'react';
import '../App.css';
import { Button, Icon, Form, Grid } from 'semantic-ui-react';

const description = () => {
    const descriptionId = document.getElementById('description');
    descriptionId.style.animation = '2.5s zoomInUp ease';
    descriptionId.style.opacity = 'inherit';
};

const button = () => {
    const buttonId = document.getElementById('button');
    buttonId.style.animation = '2s zoomInUp ease';
    buttonId.style.opacity = 'inherit';
};


const notes = () => (
    <div className="notes">
        <h1> <Icon name='sticky note outline' /> Add a new note</h1>
        <Grid centered columns={3}>
            <Grid.Column size='large' mobile={14} tablet={5} computer={5}>
                <Form size='large'>
                    <Form.Input
                        id='title' label='Title: '
                        placeholder='Title Here!'
                        onKeyUp={description} />
                    <div id='description' >
                        <hr id='hr' />
                        <Form.TextArea
                                 label='Description: '
                                 autoHeight placeholder='Add description'
                                 onKeyUp={button} />

                    </div>
                    <div id='button'>
                        <hr id='hr' />
                        <Button color='teal' animated='fade' fluid >
                            <Button.Content visible> Done </Button.Content>
                            <Button.Content hidden>
                                All good! <Icon name='thumbs outline up' />
                            </Button.Content>
                        </Button>
                    </div>
                </Form>
            </Grid.Column>
        </Grid>
        <validators />
        <br /><br />

        <br /><br /><br /><br /><br />
        <Icon.Group size='large'>
            <Icon loading size='large' name='sun' color='teal' />
            <Icon name='smile' size='massive' color='teal'/>
        </Icon.Group>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono');
        </style>
    </div>
    /*<Form widths='equal'>
            <Form.TextArea autoHeight placeholder='Add description' />
            <Button animated id="descriptionButton" color='teal'>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name='check' />
                </Button.Content>
            </Button>
        </Form>*/
    /*<img id='zoomer' src="http://cdn.shopify.com/s/files/1/1267/5799/products/image_d7e325dd-c332-4486-978c-92eae0ebd713_grande.jpeg?v=1497566371" alt=''/> */
);

export default notes;