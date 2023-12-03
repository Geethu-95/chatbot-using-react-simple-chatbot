import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot';
import SlotPicker from './SlotPicker';

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }

    handleNameInput = (name) => {
        this.setState({ name });
        this.triggerNext();
    };

    handleAgeInput = (age) => {
        this.setState({ age });
        this.triggerNext();
    };

    handleEnd({ steps, values }) {

        alert(`Your name is ${values[1]} and age is ${values[2]}. You have selected slot: ${values[0]}`)
    }

    render() {
        return (
            <>

                <ChatBot 
                    handleEnd={this.handleEnd}
                    steps={[
                        {
                            id: '0',
                            message: 'Welcome to student info system!',
                            trigger: '1',
                        },
                        {
                            id: '1',
                            message: 'Pick a slot',
                            trigger: 'slot',
                        },
                        {
                            id: 'slot',
                            component: <SlotPicker />
                            ,
                            waitAction: true,
                            trigger: '3',
                        },
                        {
                            id: '3',
                            message: 'What is your name?',
                            trigger: 'name',
                        },
                        {
                            id: 'name',
                            user: true,
                            validator: (value) => {
                                if (!value) {
                                    return 'Please enter your name.';
                                }
                                return true;
                            },
                            onEnter: ({ value }) => {
                                this.handleNameInput(value);
                            },
                            trigger: '5',
                        },
                        {
                            id: '5',
                            message: 'How old are you?',
                            trigger: 'age',
                        },
                        {
                            id: 'age',
                            user: true,
                            trigger: '7',
                            validator: (value) => {
                                if (isNaN(value)) {
                                    return 'value must be a number';
                                } else if (value < 0) {
                                    return 'value must be positive';
                                } else if (value > 120) {
                                    return `${value}? Come on!`;
                                }

                                return true;
                            },
                            onEnter: ({ value }) => {
                                this.handleAgeInput(value);
                            },
                        },
                        {
                            id: '7',
                            message: 'Great! Check out your summary',
                            trigger: 'end-message',
                        },
                        {
                            id: 'end-message',
                            message: 'Thanks! Your data was submitted successfully!',
                            end: true,
                            // onEnd: this.handleEnd
                        },
                    ]
                    }
                />
            </>
        );
    }
}

export default SimpleForm;