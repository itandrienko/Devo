import React from 'react';
import {LayoutHeader} from "../Layout/LayoutHeader";
import {InputSearch} from "../InputSearch/InputSearch";
import {UserContainer} from "../UserContainer/UserContainer";
import {LayoutMain} from "../Layout/LayoutMain";
import {Card} from "../Card/Card";
import {CardList} from "../CardList/CardList"
import {getRandomLang} from "../../util";

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

