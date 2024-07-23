import React from 'react';
import {LayoutHeader} from "../Layout/LayoutHeader";
import {InputSearch} from "../InputSearch/InputSearch";
import {UserContainer} from "../UserContainer/UserContainer";
import {LayoutMain} from "../Layout/LayoutMain";
import {CardList} from "../CardList/CardList"

export function App() {
    return (
      <>
          <LayoutHeader>
              <InputSearch/>
              <UserContainer/>
          </LayoutHeader>
          <LayoutMain>
              <CardList/>
          </LayoutMain>
      </>
  );
}

