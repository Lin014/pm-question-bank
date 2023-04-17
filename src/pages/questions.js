import { Navs } from "../components/nav"
import { db } from "../config/firebase"
import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import { Card, Button } from "react-bootstrap";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { orange } from '@mui/material/colors';


export const Quesition = () => {
    const [questions, setQuestions] = useState([]);

    const questionsCollectionRef = collection(db, "questions")

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const data = await getDocs(questionsCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setQuestions(filteredData)
            } catch (err) {
                console.error(err)
            }
        }
        getQuestions()
    }, [])

    return (
        <div>
            <Navs />
            <div className="container">

                <h3 className="sub-title">Questions List</h3>

                <div>
                    {questions.map((val, key) => {
                        if (val.type === "1") {
                            return (
                                <MultipleChoice
                                    key={key}
                                    index={key + 1}
                                    question={val.question}
                                    o1={val.option1}
                                    o2={val.option2}
                                    o3={val.option3}
                                    o4={val.option4}
                                    o5={val.option5}
                                    answer={val.answer}
                                    explanation={val.explanation} />
                            )
                        } else {
                            return (
                                <TrueFalse
                                    key={key}
                                    index={key + 1}
                                    question={val.question}
                                    answer={val.answer}
                                    explanation={val.explanation} />
                            )
                        }

                    })}
                </div>
            </div>

        </div>
    )
}

const MultipleChoice = ({ index, question, o1, o2, o3, o4, o5, answer, explanation }) => {
    const [select, setSelect] = useState("");
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");

    const showAnswer = () => {
        if (select === "") {
            console.log("not select")
        } else {
            console.log(`select: ${select}`)
            console.log(`answer: ${answer}`)
            if (select === answer) {
                setResult("Correct!")
                setResult2(explanation)
            } else {
                setResult("Wrong!")
                setResult2(explanation)
            }
        }
    }

    return (
        <div className="col mb-3">
            <Card>
                <Card.Header as="h6">Multiple Choice</Card.Header>
                <Card.Body>
                    <Card.Title>Question {index}</Card.Title>
                    <Card.Text>
                        {question}
                    </Card.Text>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value={o1} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={o1} onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel value={o2} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={o2} onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel value={o3} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={o3} onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel value={o4} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={o4} onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel value={o5} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={o5} onChange={(event) => setSelect(event.target.value)} />
                        </RadioGroup>
                    </FormControl>

                    <br />

                    <Button className="mt-3 mb-3" variant="primary" onClick={showAnswer}>Submit</Button>
                    <Card.Title
                        className={(result === "Correct!") ? "font-color-green" : "font-color-red"}>
                        {result}
                    </Card.Title>
                    <Card.Text>{result2}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

const TrueFalse = ({ index, question, answer, explanation }) => {
    const [select, setSelect] = useState("");
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");

    const showAnswer = () => {
        if (select === "") {
            console.log("not select")
        } else {
            console.log(`select: ${select}`)
            console.log(`answer: ${answer}`)
            if (select === answer) {
                setResult("Correct!")
                setResult2(explanation)
            } else {
                setResult("Wrong!")
                setResult2(explanation)
            }
        }
    }

    return (
        <div className="col mb-3">
            <Card>
                <Card.Header as="h6">True-false</Card.Header>
                <Card.Body>
                    <Card.Title>Question {index}</Card.Title>
                    <Card.Text>
                        {question}
                    </Card.Text>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="TRUE" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label="TRUE" onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel value="FALSE" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label="FALSE" onChange={(event) => setSelect(event.target.value)} />
                        </RadioGroup>
                    </FormControl>

                    <br />

                    <Button className="mt-3 mb-3" variant="primary" onClick={showAnswer}>Submit</Button>
                    <Card.Title
                        className={(result === "Correct!") ? "font-color-green" : "font-color-red"}>
                        {result}
                    </Card.Title>
                    <Card.Text>{result2}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}