import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
    const [bill, setBill] = useState(props.bill || '');
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || '');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || '');
    const [status, setStatus] = useState(props.status);
    //const [dateError, setDateError] = useState(false);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();


    const handleSelectChange = (e) => {
        setStatus(e.target.value);
        if (e.target.value === "Free" || e.target.value === "Cleaning") {
            console.log('change');
            setPeopleAmount(0);
        } else if (e.target.value === "Busy"){
            setBill(0);
        } else {
            console.log('faliure');
        }
    };
    const handleSubmit = () => {
      //setDateError(!publishedDate)
        action({ bill, peopleAmount, maxPeopleAmount, status });
      };

    
    
      return (
        <Form onSubmit={validate(handleSubmit)}>

      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Bill:</Form.Label>
        <Form.Control type="text" placeholder="Bill" value={bill} onChange={e => setBill(e.target.value)} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Status:</Form.Label>
        <Form.Select aria-label="Default select example"  value={status}
        onChange={handleSelectChange}>
        <option key={"busy"} value={"Busy"}>Busy</option>
        <option key={"free"} value={"Free"}>Free</option>
        <option key={"reserved"} value={"Reserved"}>Reserved</option>
        <option key={"cleaninig"} value={"Cleaninig"}>Cleaning</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>People:</Form.Label>
        <Form.Control type="number" value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)}/>
        <Form.Control type="number" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)}/>
     </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
            );
}

 
export default PostForm;
// id: 2,
// status: "Free",
// peopleAmount: 0,
// maxPeopleAmount: 3,
// bill: 0