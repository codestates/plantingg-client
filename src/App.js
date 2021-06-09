// 최상위 컴포넌트
import React, { Component } from "react"
import Nav from './components/Nav'
import Intropage from './pages/Intropage'
import Footer from './components/Footer'

class App extends Component {
  state = {

  }

  handleClick = () => { }

  render() {
    return (
      <>
        <Nav />
        <Intropage />
        <Footer />
      </>

    )
  }
}

export default App;