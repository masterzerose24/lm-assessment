import React, { Fragment, useState } from "react";
import faker from "faker";
import UserDetail from "./UserDetail";
import "./app.css";
import Spinner from "./Spinner";

const GetRandomSource = () => {
  const source = [];
  for (let x = 0; x < 10; x++) {
    const newData = {
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
      content: faker.lorem.paragraph(),
      countryCode: faker.address.countryCode()
    };
    source.push(newData);
  }
  console.log("source", source);
  return source;
};

const RenderSearchBar = props => {
  const { action } = props;
  return (
    <div className="search-container">
      <div className="ui icon input visible">
        <i className="search icon"></i>
        <input
          type="text"
          placeholder="Search"
          onChange={e => action(e.target.value)}
        />
      </div>
    </div>
  );
};

const ResultList = props => {
  const contactList = GetRandomSource();
  const { searchKey } = props;
  return (
    <Fragment>
      {!searchKey && <h1>No Result</h1>}
      {searchKey &&
        contactList
          .filter(contact => contact.email.includes(searchKey))
          .map(contact => <UserDetail details={contact}></UserDetail>)}
    </Fragment>
  );
};

const FakeLoad = (setLoading) => {
  setTimeout(() => {
    setLoading(false);
  }, 1000)
}

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onSearch = (value) => {
    setSearchKey(value);
    setLoading(true);
    FakeLoad(setLoading);
  }
  return (
    <div>
      <RenderSearchBar action={onSearch}></RenderSearchBar>
      <div className="ui three cards card-container active">
        {isLoading && searchKey && <Spinner></Spinner>}
        {isLoading && !searchKey && <ResultList searchKey={searchKey}></ResultList>}
        {!isLoading && <ResultList searchKey={searchKey}></ResultList>}
      </div>
    </div>
  );
};

export default SearchBar;
