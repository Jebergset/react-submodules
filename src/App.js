import React from 'react';
import './App.css';
import BasicModules from './components/BasicModule'
import BasicPropsModules from './components/BasicPropsModules'
import DefaultPropsModule from './components/DefaultPropsModule'
import BasicStateModule from './components/BasicStateModule'
import StateArrayModule from './components/StateArrayModule'
import LocalJSONModule from './components/LocalJSONModule'
import CheckList from './components/Checklist';



const App = () => {
  return( 
    <div className='app'>
      <CheckList />
      <LocalJSONModule />
      <StateArrayModule />
      <BasicStateModule />
      <DefaultPropsModule />
      <BasicPropsModules value='pink'/>
      <BasicModules />
      
    </div>
  )
}

export default App;
