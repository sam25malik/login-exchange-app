import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal } from 'semantic-ui-react'
import {login,setEmail,setPassword,timeStamp} from '../actions/index';

const SignIn = ({}) => {
    	const {results,cart,email,password} = useSelector(state => state.data);
        const dispatch = useDispatch();
        const [open, setOpen] = useState(false);
        const [time, setTime] = useState('');
        
        useEffect(() => {
		    const subscribe = {
		      topic: "subscribe", 
		      to: "EURUSD:CUR"
		    };
    		const ws = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');

		    ws.onopen = () => {
		      console.log('open');
		      ws.send(JSON.stringify(subscribe));
		    };
		    ws.onmessage = (event) => {
		      console.log('event',event.timeStamp);
		      setTime(event.timeStamp);
		    };
		    ws.onclose = () => {
		      ws.close();
		    };

		    return () => {
		      ws.close();
			};
  	},[time]);


        return(<><Grid textAlign='center' style={{ height: '100vh' , backgroundColor:'black'}} verticalAlign='middle'>
			    <Grid.Column style={{ maxWidth: 450 }}>
			      <h2 className='header-white'>Latest TimeStamp: {time}</h2>
			      <Header as='h2' textAlign='center' className='header-white'>
			         Log in to your account now
			      </Header>
			      <Form size='large'>
			        <Segment stacked>
			          <Form.Input 
			          	fluid icon='user' 
			          	iconPosition='left' 
			          	placeholder='E-mail address' 
			          	value={email} 
			          	onChange={(e, { value }) => dispatch(setEmail(value))}/>
			          <Form.Input
			            fluid
			            icon='lock'
			            iconPosition='left'
			            placeholder='Password'
			            type='password'
			            value={password} 
			            onChange={(e, { value }) => dispatch(setPassword(value))}
			          />

			          <Button color='teal' fluid size='large' onClick={() => dispatch(login())}>
			            Login
			          </Button>
			        </Segment>
			      </Form>
			      <Message>
			 	  <Button color='teal' fluid size='large' onClick={()=> setOpen(true)}>
			        Reset
			       </Button> </Message>
			       <Modal
				      onClose={() => setOpen(false)}
				      onOpen={() => setOpen(true)}
				      open={open}
				    >
				      <Modal.Header>Reset Your Password</Modal.Header>
				      
				      <Modal.Content image>
				        <Modal.Description>
				        <p>
			            	Enter Email Address to continue
			          	</p>
				        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={email} onChange={(e, { value }) => dispatch(setEmail(value))}/>
				        </Modal.Description>
				      </Modal.Content>
				      <Modal.Actions>
				        <Button color='black' onClick={() => setOpen(false)}>
				          Close
				        </Button>
				        <Button
				          content="Continue"
				          labelPosition='right'
				          icon='checkmark'
				          onClick={() => setOpen(false)}
				          positive
				        />
				      </Modal.Actions>
				    </Modal>
				</Grid.Column>
			</Grid>
			
		     </>

			);
}
               
export default SignIn;

