import React from 'react';
import './App.css';
import ReducerExample from './components/ReducerExample';
import ContextExample from './components/ContextExample';
import { ThemeContextProvider } from './components/ThemeContext';
import RefExample from './components/RefExample';
// import Home from './components/Home';
// import Instructor from './components/Instructor';
// import InstructorList from './components/InstructorList';
// import Request from './components/Request';
// import EventAction from './components/EventAction';
// import LoginCheck from './components/LoginCheck';

function App() {
  // const instructor = {
  //   firstName: 'Rst',
  //   lastName: 'Cmgz'
  // }

  // const instructorList = [
  //   {
  //     firstName: 'Rst',
  //     lastName: 'Cmgz'
  //   },
  //   {
  //     firstName: 'Mhmt',
  //     lastName: 'Cmgz'
  //   },
  //   {
  //     firstName: 'Hmdi',
  //     lastName: 'Cmgz'
  //   },


  // ]
  return (

    <div className="App">
      {/* <Home name="rst cmgz" age={21} courseNumber={2} isBest={true} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="loading" />
      <EventAction /> */}
      {/* <LoginCheck /> */}
      <ReducerExample />
      <ThemeContextProvider>
        <ContextExample />
      </ThemeContextProvider>
      <RefExample />
    </div>
  );
}

export default App;
