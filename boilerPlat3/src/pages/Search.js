import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";


class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h1 className="site-heading d-none d-lg-block">
          <span className="site-heading-upper">美 Utsukushi</span>
        </h1>


        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div className="container">
            {/* <!-- <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"></a> -->
            <!-- <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> --> */}
            <div className="collapse navbar-collapse px-lg-4 animated fadeInDown" id="navbarResponsive">
              <div className="navbar-nav mx-auto px-lg-4">
                <div className="cta-inner text-center rounded">
                  <div className="card" style="width:300px">
      <img className="card-img-top" src={require("../assets/image/img_avatar1.png")} alt="Card image" />
      <div className="card-body">
        <h4 className="card-title">Profile</h4>
      </div>
    </div>

    </div>
    </div>
    </div>
    </div>
    </nav>
        {/* <!-- <div className="container">
          <div className="row">
            <div className="col-sm">

            </div>
            <div className="col-sm">

            </div>
            <div className="col-sm">

            </div>
          </div>
        </div> --> */}

    <div className="card-columns animated fadeInDown">
      <div className="card bg-light">
        <div className="card-body text-center">
          <p className="card-text">Recommendation 1</p>
        </div>
      </div>
      <div className="card bg-light">
        <div className="card-body text-center">
          <p className="card-text">Recommendation 2</p>
        </div>
      </div>
      <div className="card bg-light">
        <div className="card-body text-center">
          <p className="card-text">Recommendation 3</p>
        </div>
      </div>
      <div className="card bg-light">
        <div className="card-body text-center">
          <p className="card-text">Recommendation 4</p>
        </div>
      </div>
      <div className="card bg-light">
        <div className="card-body text-center">
          <p className="card-text">Recommendation 5</p>
        </div>
      </div>
      <div className="card bg-light">
        <div className="card-body text-center">
          <p className="card-text">Recommendation 6</p>
        </div>
      </div>
    </div>



        {/* <footer
          <div className="container">
            <p className="m-0 small">Copyright &copy; The Glam Squad 2018</p>
          </div>
        </footer> */}
  </div>
    );
  }
}

export default Search;
//
// class Search extends Component {
//   state = {
//     search: "",
//     breeds: [],
//     results: [],
//     error: ""
//   };
//
//   // When the component mounts, get a list of all available base breeds and update this.state.breeds
//   componentDidMount() {
//     API.getBaseBreedsList()
//       .then(res => this.setState({ breeds: res.data.message }))
//       .catch(err => console.log(err));
//   }
//
//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };
//
//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Breed!</h1>
//           <Alert
//             type="danger"
//             style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
//           >
//             {this.state.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             breeds={this.state.breeds}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }
//
// export default Search;
