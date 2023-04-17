import { Navs } from "../components/nav"
import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import { Card, Button } from "react-bootstrap";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { orange } from '@mui/material/colors';
import { collectionRef } from "../components/collectionRef";
import { QuestionCheckbox } from "../components/checkbox";


export const Quesition = () => {
    const [questions, setQuestions] = useState([]);
    const [showQuestions, setShowQuestions] = useState([]);

    const [ch1, setCh1] = useState(true);
    const [ch2, setCh2] = useState(true);
    const [ch3, setCh3] = useState(true);
    const [ch4, setCh4] = useState(true);
    const [ch5, setCh5] = useState(true);
    const [ch6, setCh6] = useState(true);
    const [others, setOthers] = useState(true); 

    useEffect(() => {
        const getQuestions = async () => {
            try {
                let filter = []
                for (let cr in collectionRef) {
                    const data = await getDocs(collectionRef[cr])
                    const filteredData = data.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                    filter.push(...filteredData)
                }
                setQuestions(filter)
                setShowQuestions(filter)
            } catch (err) {
                console.error(err)
            }
        }
        getQuestions()
    }, [])

    useEffect(() => {
        let filter2 = []
        questions.map((val, key) => {
            if (ch1) {
                if (val.chapter === "ch1") {
                    filter2.push(val)
                }
            }
            if (ch2) {
                if (val.chapter === "ch2") {
                    filter2.push(val)
                }
            }
            if (ch3) {
                if (val.chapter === "ch3") {
                    filter2.push(val)
                }
            }
            if (ch4) {
                if (val.chapter === "ch4") {
                    filter2.push(val)
                }
            }
            if (ch5) {
                if (val.chapter === "ch5") {
                    filter2.push(val)
                }
            }
            if (ch6) {
                if (val.chapter === "ch6") {
                    filter2.push(val)
                }
            }
            if (others) {
                if (val.chapter === "others") {
                    filter2.push(val)
                }
            }
        })
        setShowQuestions(filter2)
    }, [ch1, ch2, ch3, ch4, ch5, ch6, others])

    return (
        <div>
            <Navs />
            <div className="container" style={{ marginTop: "70px"}}>
                <h3 className="sub-title">Questions List</h3>
                <QuestionCheckbox 
                    ch1={ch1} ch2={ch2} ch3={ch3} ch4={ch4} ch5={ch5} ch6={ch6} others={others}
                    setCh1={setCh1} setCh2={setCh2} setCh3={setCh3} setCh4={setCh4}
                    setCh5={setCh5} setCh6={setCh6} setOthers={setOthers}
                />

                <div>
                    {showQuestions.sort(() => Math.random() - 0.5).map((val, key) => {
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
                                    explanation={val.explanation}
                                    chapter={val.chapter} />
                            )
                        } else {
                            return (
                                <TrueFalse
                                    key={key}
                                    index={key + 1}
                                    question={val.question}
                                    answer={val.answer}
                                    explanation={val.explanation}
                                    chapter={val.chapter} />
                            )
                        }

                    })}
                </div>
            </div>

        </div>
    )
}

const MultipleChoice = ({ index, question, o1, o2, o3, o4, o5, answer, explanation, chapter }) => {
    const [select, setSelect] = useState("");
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");
    const [curChapter, setCurChapter] = useState("")

    const showAnswer = () => {
        if (select === "") {
            console.log("not select")
        } else {
            console.log(`select: ${select}`)
            console.log(`answer: ${answer}`)
            if (select === answer) {
                setResult("Correct!")
                setResult2(explanation)
                setCurChapter("Scope: " + chapter)
            } else {
                setResult("Wrong!")
                setResult2(explanation)
                setCurChapter("Scope: " + chapter)
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
                    <Card.Text>{curChapter}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

const TrueFalse = ({ index, question, answer, explanation, chapter }) => {
    const [select, setSelect] = useState("");
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");
    const [curChapter, setCurChapter] = useState("")

    const showAnswer = () => {
        if (select === "") {
            console.log("not select")
        } else {
            console.log(`select: ${select}`)
            console.log(`answer: ${answer}`)
            if (select === answer) {
                setResult("Correct!")
                setResult2(explanation)
                setCurChapter("Scope: " + chapter)
            } else {
                setResult("Wrong!")
                setResult2(explanation)
                setCurChapter("Scope: " + chapter)
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
                    <Card.Text>{curChapter}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}