import React from 'react';
import { Student, Оценка } from '../App';

interface Параметры {
    ученик: Student;
    поставитьОценку: (ученик: Student, оценка: Оценка) => void;
}

const Card = ({ученик, поставитьОценку}:Параметры)=>{
    console.log(ученик);
    const changeMark = (e : any) => {
        поставитьОценку(ученик, e.target.value)
        // ученик.оценка = e.target.value;
    }
    return (
        <div className='card'>
            <div className='firstName'>{ученик.имя}</div>
            <div className='lastName'>{ученик.фамилия}</div>
            <select onChange={changeMark}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </div>
    )
}

export default Card;