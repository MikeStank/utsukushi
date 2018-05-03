// Below code is creating our React Router ---- See Pupster Activity for answers to questions
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "/components/Footer";
import Wrapper from "/components/Wrapper";
import logo from './logo.svg';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path = "/" component={About} />
        <Route exact path = "/about" component={About} />
        <Route exact path = "/disocver" component={Discover} />
        <Route exact path = "/search" component={Search} />
      </Wrapper>
    </div>
  </Router>

  removeProduct = id => {
    // Filter this.state.products for products with an id not equal to the id being removed
    const products = this.state.products.filter(product => product.id !== id);
    // Set this.state.friends equal to the new products array
    this.setState({ products });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Your Makeup Drawer</Title>
        {this.state.products.map(product => (
          <ProductCard
            removeProduct={this.removeFriend}
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }

export default App;




// ***** Below is the boilerplate Reacte App that is pulled from Github *****


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
