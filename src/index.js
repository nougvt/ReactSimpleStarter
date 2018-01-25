import React from "react";
import ReactDom from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBqfWMqYT_FdmHokvFg4g6LUU2eOCqJs";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
