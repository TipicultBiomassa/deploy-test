import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
enum Пол {
  мужской = 'мужской',
  женский = 'женский'
}
export type Оценка = 1|2|3|4|5;
export interface Student {
  имя: string;
  фамилия?: string;
  пол: Пол;
  возраст?: number;
  оценка?: Оценка;
  оценкаЛюбая?: number;
}

function App() {
  const массив: Student[] = [
    {
    имя: 'Иван',
    пол: Пол.мужской,
    оценка: 5,
    },
    {
      имя: 'Петя',
      пол: Пол.мужской,
      оценка: 5,
    },
    {
      имя: 'Лера',
      пол: Пол.женский,
      оценка: 5,
    },
  ]
  const [студенты, функцияИзменения] = useState(массив); 

  const ставитьОценку = (ученик: Student, оценка: Оценка)=>{
    //let dummy = студенты;
    //dummy[dummy.indexOf(ученик)].оценка = 1;
    //console.log(dummy)
    функцияИзменения(студенты.map((el, index)=>{
      if(студенты.indexOf(ученик) === index){
        el.оценкаЛюбая = parseInt(String(оценка));
      }
      return el
    }));
  }
  
  const onlyStrings: String[] = ['asd'];
  return (
    <div>
      {студенты.map((ученик)=>{
        return (
          <Card ученик={ученик} поставитьОценку={ставитьОценку}/>
        )
      })}
      <div>
      Оценки учеников:
      {студенты.map((ученик)=>{
        return (
          <>
            <p>{ученик.имя}</p>
            <p>{ученик.оценкаЛюбая}</p>
          </>
        )
      })}
      </div>
    </div>
  );
}

export default App;
