import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPage} from "../Pages/MainPage/MainPage";
import {CardPage} from "../Pages/CardPage/CardPage";

export function App() {
    return (
      <>
          <Routes>
              <Route path="/" element={<MainPage/>}></Route>
              <Route path="card/:id" element={<CardPage/>}></Route>
          </Routes>
      </>
  );
}

