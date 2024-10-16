import React, { useEffect, useState } from 'react'
import "./Game.css";
import Boximg from "./boximg/Boximg";


const allimg = [
  { src: require("./img/helmet-1.png"), status: false, id: 1 },
  { src: require("./img/potion-1.png"), status: false, id: 2 },
  { src: require("./img/ring-1.png"), status: false, id: 3 },
  { src: require("./img/scroll-1.png"), status: false, id: 4 },
  { src: require("./img/shield-1.png"), status: false, id: 5 },
  { src: require("./img/sword-1.png"), status: false, id: 6 },
  { src: require("./img/love.jpg"), status: false, id: 7 },
  { src: require("./img/hh.jpg"), status: false, id: 8 },
  { src: require("./img/sa.jpg"), status: false, id: 9 },
  { src: require("./img/ss.jpg"), status: false, id: 10 },
  { src: require("./img/helmet-1.png"), status: false, id: 11 },
  { src: require("./img/potion-1.png"), status: false, id: 12 },
  { src: require("./img/ring-1.png"), status: false, id: 13 },
  { src: require("./img/scroll-1.png"), status: false, id: 14 },
  { src: require("./img/shield-1.png"), status: false, id: 15 },
  { src: require("./img/sword-1.png"), status: false, id: 16 },
  { src: require("./img/love.jpg"), status: false, id: 17 },
  { src: require("./img/hh.jpg"), status: false, id: 18 },
  { src: require("./img/sa.jpg"), status: false, id: 19 },
  { src: require("./img/ss.jpg"), status: false, id: 20 },
]
let allimgs = [...allimg]
let number = 0
let correct = 0

export default function Game() {
  let [pop, setPop] = useState(allimgs)
  let [choiceone, setChoiceone] = useState(null);
  let [choicetwo, setChoicetwo] = useState(null);
  let [timer, setTimer] = useState();
  let [again, setAgain] = useState(false);
  const [filip, setFilip] = useState(true);
  //تابع هندل کلیک برا موقع کلیک روی new game
  let handelclick = () => {
    setAgain(false)
    correct = 0
    setTimer(46)
    setPop([...allimgs].sort(() => Math.random() - .5))
    setChoiceone(null);
    setChoicetwo(null);
    setFilip(false)
    number = 0
    allimgs.forEach((pop) => {
      pop.status = false;
    })
    setTimeout(() => {
      setFilip(true)
    }, 1200);
  }
  //تابع هندل چویز برا انتخاب یک عکس
  let handelchoice = (param) => {
    number += 1
    !choiceone ? setChoiceone(param) : setChoicetwo(param)
  }
  useEffect(() => {
    if (choiceone && choicetwo) {
      setChoiceone(null)
      setChoicetwo(null)
      if (choiceone.src === choicetwo.src && choiceone.id !== choicetwo.id) {
        console.log(choiceone.id);
        console.log(choicetwo.id);
        setChoiceone(null)
        setChoicetwo(null)
        number -= 2
        correct += 1
        allimgs.map((pop) => {
          if (pop.src === choiceone.src) {
            return pop.status = true
          }
        })
      } else {
        setChoiceone(null)
        setChoicetwo(null)
      }
    }
    let timerr = setTimeout(() => {
      setFilip(true)
    }, 1200);

    clearTimeout(timerr)
  }, [choiceone, choicetwo, filip])

  useEffect(() => {
    if (again) {
      return 0
    }
    let contoroltimer = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setAgain(true)
          return "timer out"
        } else if (prev) {
          return prev - 1
        }
        return

      })
    }, 1000);
    return () => clearInterval(contoroltimer);
  }, [again])

  return (

    <div className="box">
      <button className='btn' onClick={() => handelclick()}>Start Game</button>
      <div className='numbers'>
        <div className='number1'>{"time : "}{timer}</div>
        <div className='number2'>{"correct: "}{correct}</div>
        <div className='number3'>{"wrong :"} {number}</div>
      </div>
      <div className="boximgs">
        {pop.map((params, index) => (
          <div className='boximg' key={index}>
              <Boximg params={params} handelchoice={handelchoice} filip={filip} again={again} />
            
          </div>
        ))}
      </div>
    </div>
  )
}
