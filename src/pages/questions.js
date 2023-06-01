import { Navs } from "../components/nav"
import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import { Card, Button, Spinner } from "react-bootstrap";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { orange } from '@mui/material/colors';
import { collectionRef } from "../components/collectionRef";
import { QuestionCheckbox } from "../components/checkbox";

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [showQuestions, setShowQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [ch1, setCh1] = useState(true);
    const [ch2, setCh2] = useState(true);
    const [ch3, setCh3] = useState(true);
    const [ch4, setCh4] = useState(true);
    const [ch5, setCh5] = useState(true);
    const [ch6, setCh6] = useState(true);
    const [ch7, setCh7] = useState(true);
    const [ch8, setCh8] = useState(true);
    const [ch9, setCh9] = useState(true);
    const [ch13, setCh13] = useState(true);
    const [others, setOthers] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const getQuestions = async () => {
            try {
                const data = await getDocs(collectionRef.all)
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

    useEffect(() => {
        console.log("is Loading: ", isLoading)
        let filter2 = []
        questions.map((val) => {
            if (ch1 && ch2 && ch3 && ch4 && ch5 && ch6 && ch7 && ch8 && ch9 && ch13 && others) {
                return filter2 = questions
            } else {
                if ((ch1 && val.chapter === "ch1") ||
                    (ch2 && val.chapter === "ch2") ||
                    (ch3 && val.chapter === "ch3") ||
                    (ch4 && val.chapter === "ch4") ||
                    (ch5 && val.chapter === "ch5") ||
                    (ch6 && val.chapter === "ch6") ||
                    (ch7 && val.chapter === "ch7") ||
                    (ch8 && val.chapter === "ch8") ||
                    (ch9 && val.chapter === "ch9") ||
                    (ch13 && val.chapter === "ch13") ||
                    (others && val.chapter === "others")) {
                    filter2.push(val)
                }
            }
            return filter2
        })
        setShowQuestions(randomAry(filter2))
        setIsLoading(false)
        console.log("is Loading: ", isLoading)
    }, [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch13, others, questions, isLoading])

    const randomAry = (ary) => {
        return ary.sort(() => Math.random() - 0.5)
    }

    const questionList = (val, key) => {
        if (val.type === "1") {
            let optionList = randomAry([val.option1, val.option2, val.option3, val.option4, val.option5])
            return (
                <MultipleChoice
                    key={key}
                    index={key + 1}
                    question={val.question}
                    options={optionList}
                    answer={val.answer}
                    explanation={val.explanation}
                    chapter={val.chapter}
                    id={val.id} />
            )
        } else {
            return (
                <TrueFalse
                    key={key}
                    index={key + 1}
                    question={val.question}
                    answer={val.answer}
                    explanation={val.explanation}
                    chapter={val.chapter}
                    id={val.id} />
            )
        }
    }

    return (
        <div>
            <Navs id="top" />
            <div className="container" style={{ marginTop: "70px" }}>
                <a href="#top"><img alt="Go to top button" className="right-btn" src={require('../pictures/godgwawa2.png')} /></a>
                <h3 className="sub-title">Questions List</h3>
                <QuestionCheckbox
                    ch1={ch1} ch2={ch2} ch3={ch3} ch4={ch4} ch5={ch5} ch6={ch6} 
                    ch7={ch7} ch8={ch8} ch9={ch9} ch13={ch13} others={others}
                    setCh1={setCh1} setCh2={setCh2} setCh3={setCh3} setCh4={setCh4}
                    setCh5={setCh5} setCh6={setCh6} setCh7={setCh7} setCh8={setCh8}
                    setCh9={setCh9} setCh13={setCh13} setOthers={setOthers}
                    setIsLoading={setIsLoading}
                />
                <div>
                    {isLoading ?
                        <div className="d-flex justify-content-center">
                            <Spinner className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                        : showQuestions.map((val, key) => {
                            return questionList(val, key)
                        })}
                </div>

            </div>

        </div>
    )
}


const MultipleChoice = ({ index, question, options, answer, explanation, chapter, id }) => {
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
                            <FormControlLabel className="mb-2" value={options[0]} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={options[0]} onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel className="mb-2" value={options[1]} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={options[1]} onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel className="mb-2" value={options[2]} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={options[2]} onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel className="mb-2" value={options[3]} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={options[3]} onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel className="mb-2" value={options[4]} control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label={options[4]} onChange={(event) => setSelect(event.target.value)} />
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
                    <footer className="blockquote-footer">id: {id}</footer>
                </Card.Body>
            </Card>
        </div>
    )
}

const TrueFalse = ({ index, question, answer, explanation, chapter, id }) => {
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
                            <FormControlLabel className="mb-2" value="TRUE" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: orange[500],
                                },
                            }} />} label="TRUE" onChange={(event) => setSelect(event.target.value)} />
                            <FormControlLabel className="mb-2" value="FALSE" control={<Radio sx={{
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
                    <footer className="blockquote-footer">id: {id}</footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Questions;