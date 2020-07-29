import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customerInfo = {
  'name': '홍길동',
  'birthday':'20202020',
  'gender':'남자',
  'job':'직장인'
}

function App() {
  return (
    <Customer 
      name={customerInfo.name}
      birthday={customerInfo.birthday}
      gender={customerInfo.gender}
      job={customerInfo.job}/>
  );
}

export default App;
