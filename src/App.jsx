import React from 'react';
import { Provider } from 'react-redux'
import Layout from './components/Organisms/Header'
import ListCard from './components/Organisms/ListCard'
import store from './store'

document.querySelector('body').style.margin = 0
document.querySelector('body').style.padding = 0
document.querySelector('body').style.backgroundColor = "#202329"


function App() {
  return (
    <Provider store={store}>
      <Layout />
      <ListCard />
    </Provider>
  );
}

export default App;
