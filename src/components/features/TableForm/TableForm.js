import styles from './TableForm.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import clsx from 'clsx';

const PostForm = ({ action, actionText, ...props }) => {
    const [bill, setBill] = useState(props.bill || '');
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || '');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || '');
    const [status, setStatus] = useState(props.status || '');
    const { handleSubmit: validate, } = useForm();


    const handleSelectChange = (e) => {
        setStatus(e.target.value);
        if (e.target.value === "Free" || e.target.value === "Cleaning") {
            console.log('change');
            setPeopleAmount(0);
        } else if (e.target.value === "Busy") {
            setBill(0);
        } else {
            console.log('faliure');
        }
    };

    const handlePeopleAmountChange = (e) => {
        if (e.target.value > 10) {
            setPeopleAmount(10)
        } else if (e.target.value < 0) {
            setPeopleAmount(0)
        } else if (e.target.value > maxPeopleAmount) {
            setPeopleAmount(maxPeopleAmount);
        } else {
            setPeopleAmount(e.target.value)
        }
    }


    const handleMaxPeopleAmountChange = (e) => {
        if (e.target.value > 10) {
            setMaxPeopleAmount(10)
        } else if (e.target.value < 0) {
            setMaxPeopleAmount(0)
        } else if (peopleAmount > e.target.value) {
            setPeopleAmount(e.target.value)
            setMaxPeopleAmount(e.target.value)
        } else {
            setMaxPeopleAmount(e.target.value)
        }
    }
    const handleSubmit = () => {
        action({ bill, peopleAmount, maxPeopleAmount, status });
    };



    return (
        <Form className={styles.container} onSubmit={validate(handleSubmit)}>

            <Form.Group className="mb-3 d-flex" controlId="status">
                <Form.Label className={styles.text}>Status:</Form.Label>
                <Form.Select aria-label="Default select example" value={status}
                    onChange={handleSelectChange}>
                    <option key={"busy"} value={"Busy"}>Busy</option>
                    <option key={"free"} value={"Free"}>Free</option>
                    <option key={"reserved"} value={"Reserved"}>Reserved</option>
                    <option key={"cleaninig"} value={"Cleaning"}>Cleaning</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="people">
                <Form.Label className={styles.text}>People:</Form.Label>
                <Form.Control className='w-25' type="number" value={peopleAmount} onChange={handlePeopleAmountChange} />
                <div className="input-group-append">
                    <span className={styles.devider}>/</span>
                </div>
                <Form.Control className='w-25' type="number" value={maxPeopleAmount} onChange={handleMaxPeopleAmountChange} />
            </Form.Group>
            <Form.Group className={clsx("mb-3 d-flex", status !== "Busy" && styles.notActive)} controlId="bill">
                <Form.Label className={styles.text}>Bill:</Form.Label>
                <div className="input-group-append">
                    <span className={styles.devider}>$</span>
                </div>
                <Form.Control className='w-25' type="text" placeholder="Bill" value={bill} onChange={e => setBill(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    );
}


export default PostForm;
