import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./components/Movie.js";
import Lists from "./components/lists.js";
import Popularity from "./components/Popularity.js";
import {
  Form,
  Nav,
  FormControl,
  Navbar,
  Button,
  ListGroup,
  Dropdown
} from "react-bootstrap";
import Modal from 'react-modal';
import YouTube from 'react-youtube';


let apiKey = process.env.REACT_APP_myAPIkey;
let keyWord = "";
let movieList = [];
let page = 1;

function App() {
  let [movies, setMovies] = useState(null);
  const [genreList, setGenreList] = useState([]);
  let [popularList, setPopularList] = useState([]);

  let [modal, setModal] = useState(false);
  let [trailer, setTrailer] = useState('');

  let currentPlaying = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
    let data = await fetch(url);
    let dataResult = await data.json();
    console.log('dataResult:', dataResult);
    movieList = movieList.concat(dataResult.results);
    console.log("data bitna get", dataResult.results);
    setMovies(movieList);
  };

  let getGenreList = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    );
    let dataResult = await data.json();
    console.log("genres output", dataResult);
    setGenreList(dataResult.genres);
    // let genresList = dataResult.genres;
  };

  let sortByPopularity = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );
    let dataResult = await data.json();
    popularList = popularList.concat(dataResult.results);
    console.log("popular movies", dataResult.results);
    setPopularList(popularList);
    // setPopularList(dataResult.results);
    // setPopularity(dataResult.)
  };

  useEffect(() => {
    currentPlaying();
    getGenreList();
    sortByPopularity();
  }, []);

  let searchByKeyWord = e => {
    keyWord = e.target.value;
    if (keyWord === "") {
      setMovies(movieList);
    } else {
      setMovies(
        movies.filter(movie =>
          movie.title.toLowerCase().includes(keyWord.toLowerCase())
        )
      );
    }
  };

  let loadMore = () => {
    page++;
    currentPlaying();
  };

  let openModal = async (movieID) => {
    setModal(true);
    let url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}&language=en-US`
    let response = await fetch(url);
    let data = await response.json();
    console.log('data for videos:', data)
    console.log('video link:', data.results[0].key)
    setTrailer(data.results[0].key);
  }

  if (movies == null) {
    return <div>loading the movie</div>;
  }
  return (
    <div style={{ backgroundColor: "#D6FFC9" }}>
      <div>
        <Navbar
          expand="lg"
          style={{
            marginBottom: "30px",
            backgroundColor: "#98B58F"
          }}
        >
          {" "}
          <Form inline className="col-md-3">
            <FormControl
              style={{
                backgroundColor: "#D6FFC9",
                border: "1px solid #73956F",
                right: 70,
                top: 5
              }}
              type="text"
              placeholder="Movie name"
              className="mr-sm-2"
              onChange={e => searchByKeyWord(e)}
            />
            <Button
              style={{
                color: "#BEEDAA",
                backgroundColor: "#3F4B3B",
                border: "1px solid #73956F",
                right: 2,
                top: 5
              }}
              onClick={() => searchByKeyWord()}
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <ListGroup.Item
                style={{
                  borderRadius: "5px",
                  width: "95px",
                  color: "#BEEDAA",
                  backgroundColor: "#3F4B3B",
                  border: "1px solid #73956F",
                  marginLeft: "20px"
                }}
                action
                variant="danger"
                // onClick={() => sortByPopularity()}
              >
                RATING{" "}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  borderRadius: "5px",
                  width: "135px",
                  color: "#BEEDAA",
                  backgroundColor: "#3F4B3B",
                  border: "1px solid #73956F",
                  marginLeft: "20px"
                }}
                action
                variant="danger"
                // onClick={() => sortByPopularity()}
              >
                LANGUAGES{" "}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  borderRadius: "5px",
                  width: "115px",
                  color: "#BEEDAA",
                  backgroundColor: "#3F4B3B",
                  border: "1px solid #73956F",
                  marginLeft: "20px"
                }}
                action
                variant="danger"
                onClick={() => sortByPopularity()}
              >
                POPULAR{" "}
              </ListGroup.Item>

              <Dropdown>
                <Dropdown.Menu title="Quality" className="super-colors">
                  <Dropdown.Item eventKey="1">2020</Dropdown.Item>{" "}
                  <Dropdown.Item eventKey="2">2019</Dropdown.Item>
                  <Dropdown.Item eventKey="3">2018</Dropdown.Item>
                  <Dropdown.Item eventKey="4">2017</Dropdown.Item>
                  <Dropdown.Item eventKey="5">2016</Dropdown.Item>
                  <Dropdown.Item eventKey="6">Before 2016</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand
            className="col-md-3"
            href="App.js"
            style={{ fontWeight: "900", fontSize: "35px" }}
          >
            One More Episode
          </Navbar.Brand>
        </Navbar>
      </div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-md-3">
          <ListGroup.Item
            style={{
              width: "200px",
              textAlign: "center",
              color: "#BEEDAA",
              backgroundColor: "#3F4B3B",
              border: "1px solid #73956F",
              fontWeight: "800"
            }}
          >
            CATEGORY
          </ListGroup.Item>{" "}
          <Lists genreList={genreList} />
        </div>

        <div
          className="col-md-9"
          style={{ display: "flex", justifyContent: "center" }}
        >
          >
          <Movie style={{}} movieList={movies} openModal={openModal} />
          {/* <Popularity popularList={popularList}/> */}
        </div>
      </div>

      <Modal
          isOpen={modal}
          onRequestClose={()=>setModal(false)}
          // style={customStyles}
          contentLabel="Example Modal">
         <YouTube
        videoId={trailer}
        autoplay
        className="video"
        
      />
        </Modal>

      <div className="">
        <ListGroup
          defaultActiveKey="#link1"
          style={{ position: "fixed", right: "0", bottom: "0" }}
        >
          <ListGroup.Item
            style={{
              width: "140px",
              color: "#BEEDAA",
              backgroundColor: "#3F4B3B",
              border: "1px solid #73956F"
            }}
            action
            variant="danger"
          >
            Back to top
          </ListGroup.Item>

          <ListGroup.Item
            style={{
              width: "140px",
              color: "#BEEDAA",
              backgroundColor: "#3F4B3B",
              border: "1px solid #73956F"
            }}
            action
            variant="danger"
          >
            Go to bottom
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="" style={{ position: "fixed", right: "0" }}></div>

      <Button
        style={{
          marginTop: "30px",
          backgroundColor: "#3F4B3B",
          border: "4px solid #73956F",
          color: "#BEEDAA",
          height: "55px",
          width: "400px",
          justifyContent: "space-around",
          display: "flex"
        }}
        onClick={() => loadMore()}
        variant="secondary"
        size="lg"
        block
      >
        See More{" "}
      </Button>
      <footer></footer>
    </div>
  );
}

export default App;
