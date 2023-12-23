import { useState, useEffect } from "react";
import { getApiConfiguration } from "./store/home.js"
import {fetchDataFromApi} from "./utils/api.js"
import { store } from "./store/store.js";
import { useSelector,useDispatch } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PagenotFound from "./pages/four/PageNotFound.jsx";


function App(){

  const dispatch = useDispatch();
  // const { url } = useSelector((state) => state.home);
  useSelector((state) =>console.log(state.home));

  useEffect(() => {
      fetchApiConfig();
      genresCall();
  }, []);

  const fetchApiConfig = async () => {
    fetchDataFromApi("/configuration").then((res) => {
         

          const url = {
              backdrop: res.images.secure_base_url + "original",
              poster: res.images.secure_base_url + "original",
              profile: res.images.secure_base_url + "original",
          };

          dispatch(getApiConfiguration(url));
          useSelector((state)=> console.log(state));
      });
  };

  const genresCall = async () => {
      let promises = [];
      let endPoints = ["tv", "movie"];
      let allGenres = {};

      endPoints.forEach((url) => {
          promises.push(fetchDataFromApi(`/genre/${url}/list`));
      });

      const data = await Promise.all(promises);
      console.log(data);
      data.map(({ genres }) => {
          return genres.map((item) => (allGenres[item.id] = item));
      });

      dispatch(getGenres(allGenres));
  };







  return(
<BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                 <Route path="*" element={<PagenotFound/>}/>
            </Routes>
            <Footer />
        </BrowserRouter> 
  
  
  )
 }
 export default App