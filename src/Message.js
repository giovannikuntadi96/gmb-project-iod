import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form'
import Select from 'react-select'
import DateRangePickerComp from './component/Date/DateRangePickerComp';
import { useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Dashboard.css'
import './Message.css'

function Message() {
    //navigate between pages
    const navigate = useNavigate();

    // Start MultiSelect
    const messageOptions     = [
        {value: 'Positive Sentiment', label:'Positive Sentiment' },
        {value: 'Negative Sentiment', label:'Negative Sentiment' },
        {value: 'Neutral Sentiment', label:'Neutral Sentiment' },
        {value: '5 Stars', label:'5 Stars' }, 
        {value: '4 Stars', label:'4 Stars' },
        {value: '3 Stars', label:'3 Stars' },
        {value: '2 Stars', label:'2 Stars' },
        {value: '1 Stars', label:'1 Stars' },
    ]

    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const messageChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };
    // End MultiSelect

    // Start Datepicker
    const [dateRange, setDateRange] = useState(null);

    const handleDateRangeSelect = (range) => {
        setDateRange(range);
    };
    // End Datepicker

    // Start Submit form
    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        console.log(payload.projectName);
        console.log(payload.isiMessage);

        for(var i=0;i<selectedOptions.length;i++){
            console.log(selectedOptions[i]);
        }
    }
    // End Submit form
    
    return (
        <>
            <div className='formStyle'>
            <h1>Message Form</h1>
            <br></br>
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-4">
                    <Form.Label>1. Let's Start with Message Name</Form.Label>
                    <br></br>
                    <Form.Text className="text-muted">
                        Input message name
                    </Form.Text>
                    <Form.Control type="text" name='projectName' />
                </Form.Group>

                <Form.Group className="mb-4" controlId="target">
                    <Form.Label>2. Define Your Target</Form.Label>
                    <br></br>
                    <Form.Text className="text-muted">
                    Select the message target
                    </Form.Text>
                    {/* <Form.Control type="email" placeholder="Enter date" /> */}
                    {/* <Form.Select>
                        <option>Select Target</option>
                        <option value='positive_sentiment'>Positive Sentiment</option>
                        <option value='negative_sentiment'>Negative Sentiment</option>
                        <option value='neutral_sentiment'>Neutral Sentiment</option>
                    </Form.Select> */}

                    {/* <Multiselect options={options} displayValue='name'/> */}
                    <Select 
                    options={messageOptions}
                    value={selectedOptions}
                    onChange={messageChange} 
                    isMulti={true}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="targetDate">
                    <Form.Label>3. Select The Date</Form.Label>
                    <br></br>
                    <Form.Text className="text-muted">
                        Choose date
                    </Form.Text>
                    {/* <Form.Control type="date" placeholder="textMsg" /> */}
                    <br></br>
                    <DateRangePickerComp applyMaxDate={false} onSelectDateRange={handleDateRangeSelect} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>4. Input The Messages</Form.Label>
                    <br></br>
                    <Form.Text className="text-muted">
                        Enter the message that will be sent automatically
                    </Form.Text>
                    <Form.Control as="textarea" placeholder="Enter text" name='isiMessage'/>
                </Form.Group>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="dark" onClick={() => navigate('/dashboard')}>
                        Cancel
                    </Button>
                    <Button variant="warning" type='submit' onClick={() => 
                        alert("Message Saved!!")}>
                        Publish
                    </Button>
                </ButtonGroup>
            </Form>
            </div>
        </>
    )
}

export default Message;
