import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday':'2020-20-20',
  'gender':'남자',
  'job':'직장인'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김민수',
  'birthday':'2020-11-20',
  'gender':'남자',
  'job':'직장인'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김민영',
  'birthday':'2020-11-20',
  'gender':'여자',
  'job':'자영업'
}
]

function App() {
  return (
    <div>
      {
      customers.map(c => {
        return (
          <Customer 
          key={c.id}
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job = {c.job}
            />
        );
      })
      }

    </div>
  );
}

export default App;
