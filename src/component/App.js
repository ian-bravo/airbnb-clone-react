import React from "react";
import NavBar from "./NavBar";
import CategoryBar from "./CategoryBar";
// import Control from "./Control";
import PlaceContainer from './example/PlaceContainer';

function App() {
  return (
    <>
    <NavBar/>
    <CategoryBar/>
    {/* <Control /> */}
    <PlaceContainer />
    </>
  );
}

export default App;
