import React from "react";
import { Box, Container, chakra, Image, Text, Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const MovieWrapper = chakra(Box, {
  baseStyle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    background: "red",
  },
});

const SearchWrapper = chakra(Box, {
  baseStyle: {
    width: "100%",
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

const MovieList = chakra(Box, {
  baseStyle: {
    width: { base: "273", md: "490px" },
    height: { base: "72px", md: "282px" },
    margin: { base: "0", lg: "0 77px" },
  },
});

const SearchTitle = chakra(Text, {
  baseStyle: {
    fontWeight: "400",
    fontSize: { base: "16px", md: "24px" },
    lineHeight: { base: "21px", md: "31px" },
    flex: "none",
    order: "0",
    flexGrow: "0",
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
    flexGrow: "0",
    outline: "none",
    width: "100%",
  },
});

const MovieContainer = () => {
  return (
    <MovieWrapper>
      <SearchWrapper>
        <SearchTitle>Search</SearchTitle>
        <SearchInput  />
      </SearchWrapper>

      <MovieList>
          
        </MovieList>
    </MovieWrapper>
  );
};

export default MovieContainer;
