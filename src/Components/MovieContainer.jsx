import React, {useState} from "react";
import { Box, chakra, Text, Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import axios from "axios";

const SearchWrapper = chakra(Box, {
  baseStyle: {
    
    height: { base: "59", md: "89px" },
    margin: {
      base: "56px 27px 33px 27px",
      md: "63px 77px 48px 77px",
      lg: "63px 57px 48px 77px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
  },
});



const SearchTitle = chakra(Text, {
  baseStyle: {
    fontWeight: "400",
    fontSize: { base: "16px", md: "24px" },
    lineHeight: { base: "21px", md: "31px" },
    flex: "none",
    order: "0",
    flexGgrow: "0",
    color: "#000000",
  },
});

const SearchInput = chakra(Input, {
  baseStyle: {
    border: "1px solid #000000",
    borderRadius: "none",
    height: { base: "34px", md: "52px" },
    flex: "none",
    order: { base: "1", md: "0" },
    flexGgrow: "0",
    outline: "none",
    width: "100%",
  },
});

  const Category = chakra(Box, {
    baseStyle: {
      margin: {
        base: "0px 0px 33px 27px",
        md: "0px 0px 48px 77px",
        lg: "0px 0px 48px 77px",
      },
      
    },
  });

  

  const MovieTitle = chakra(Text, {
    baseStyle: {
      fontWeight: "400",
      fontSize: { base: "18px", md: "24px" },
      lineHeight: { base: "21px", md: "31px" },
      marginBottom:{base:'26px', md:'18px'},
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#FFFFFF'
    },
  });

  const MovieItem= chakra(Box, {
    baseStyle: {
      
        display: 'flex',
        flexDirection: 'row',
        height:{base:'200px', md:'300px',},
        alignItems: 'flex-start',
        padding: '0px',
        gap: '13px',
        overflowX:'auto'
        
        
    },
  })

const MovieContainer = () => {

    const [search, setSearch] = useState();
  const [inputTimeOut, setInputTimeOut] = useState();
  const [movieResult, setMovieResult] = useState([]);
 
    const API_KEY = "a625269d";
  const makeAPICall = async (userSearchInput) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${userSearchInput}&apikey=${API_KEY}`
    );

    setMovieResult(response.data.Search);
    console.log(response.data.Search)
  };

    const handleChange = (e) => {
        clearTimeout(inputTimeOut);
        setSearch(e.target.value);
        const timeOutInput = setTimeout(() => makeAPICall(search), 500);
        setInputTimeOut(timeOutInput);
      };
  return (
      <Box style={{width:'100%'}}>
   
      <SearchWrapper>
        <SearchTitle>Search</SearchTitle>
        <SearchInput value={search} onChange={handleChange}/>
      </SearchWrapper>
      

      
          <Category>
        <MovieTitle>Movie Category</MovieTitle>
        
        <MovieItem>
        {movieResult?.length ? movieResult.map((movie, index) => <MovieCard key={movie.imdbID} movie = {movie} />) : <Heading  style={{color:"black", display:'flex', margin:'0 auto', fontSize:'25px'}}>No movie search</Heading> }
          </MovieItem>
          </Category>

          


       
        
    
   
    </Box>
  );
};

export default MovieContainer;
