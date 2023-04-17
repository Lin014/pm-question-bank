import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import Alert from '@mui/material/Alert';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { orange } from '@mui/material/colors';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.scss';
import { Navs } from "../components/nav";
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useEffect, useState } from "react";
import { FormLabel } from "react-bootstrap";

export const Manage = () => {

  const questionsCollectionRef = collection(db, "questions")

  const [newQuestion, setNewQuestion] = useState("");
  const [newOption1, setNewOption1] = useState("");
  const [newOption2, setNewOption2] = useState("");
  const [newOption3, setNewOption3] = useState("");
  const [newOption4, setNewOption4] = useState("");
  const [newOption5, setNewOption5] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newExplanation, setNewExplanation] = useState("");
  const [newType, setNewType] = useState("1");

  const [addState, setAddState] = useState("");

  const addQuestion = async () => {
    try {
      await addDoc(questionsCollectionRef, {
        question: newQuestion,
        option1: newOption1,
        option2: newOption2,
        option3: newOption3,
        option4: newOption4,
        option5: newOption5,
        answer: newAnswer,
        explanation: newExplanation,
        type: newType,
      })
      setAddState("success")
    } catch (err) {
      setAddState("error")
      console.error(err)
    }

  }

  return (
    <div>
      <Navs />
      <div className="container">
        <h3 className="sub-title">Add Question</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Quesition<span className="star"> *</span></Form.Label>
            <Form.Control type="text" placeholder="Enter question"
              onChange={(event) => { setNewQuestion(event.target.value) }} />
          </Form.Group>

          <Form.Label># Please don't enter A or B or C or D word.</Form.Label>

          <Form.Group className="mb-3">
            <Form.Label>Option1</Form.Label>
            <Form.Control type="text" placeholder="Enter option"
              onChange={(event) => { setNewOption1(event.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Option2</Form.Label>
            <Form.Control type="text" placeholder="Enter option"
              onChange={(event) => { setNewOption2(event.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Option3</Form.Label>
            <Form.Control type="text" placeholder="Enter option"
              onChange={(event) => { setNewOption3(event.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Option4</Form.Label>
            <Form.Control type="text" placeholder="Enter option"
              onChange={(event) => { setNewOption4(event.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Option5</Form.Label>
            <Form.Control type="text" placeholder="Enter option"
              onChange={(event) => { setNewOption5(event.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Answer<span className="star"> *</span></Form.Label>
            <Form.Control type="text" placeholder="Enter answer"
              onChange={(event) => { setNewAnswer(event.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Explanation</Form.Label>
            <Form.Control type="text" placeholder="Enter explanation"
              onChange={(event) => { setNewExplanation(event.target.value) }} />
          </Form.Group>

          <FormControl className="mt-3">
            <FormLabel>Question Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="1"
              name="radio-buttons-group"
            >
              <FormControlLabel value="1" control={<Radio sx={{
                '&.Mui-checked': {
                  color: orange[500],
                },
              }} />} label="Multiple Choice" onChange={(event) => setNewType(event.target.value)} />
              <FormControlLabel value="2" control={<Radio sx={{
                '&.Mui-checked': {
                  color: orange[500],
                },
              }} />} label="True-false" onChange={(event) => setNewType(event.target.value)} />
            </RadioGroup>
          </FormControl>

          <br />

          <Alert className="mt-3" style={{ display: (addState === "success") ? "" : "none" }} severity="success">Added successfully!</Alert>
          <Alert className="mt-3" style={{ display: "none" }} severity="error">Failed to add!</Alert>

          <Button variant="primary" onClick={addQuestion} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            Submit
          </Button>

        </Form>

      </div>
    </div>
  );
}