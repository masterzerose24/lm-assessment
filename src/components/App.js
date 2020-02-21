import React, { useState } from "react";
import faker from "faker";
import "./app.css";
import SearchBar from "./SearchBar";
import FlagCard from "./FlagCard";
import UserDetail from "./UserDetail";
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
const contactList = GetRandomSource();

function App() {
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const onSearch = key => {
    setLoading(true);
    setSearchKey(new RegExp(key,'i'));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const result = contactList.filter(client => client.email.match(searchKey));
  return (
    <div className="main ui container">
      <header className="">
        <h2 className="ui dividing header">Contact Searcher</h2>
      </header>
      <SearchBar action={onSearch}></SearchBar>
      {loading && <Spinner></Spinner>}
      {!loading && (
        <div className="ui three cards card-container active">
          {(!searchKey || !result.length) && <h1> No Results </h1>}
          {searchKey &&
              result.map(client => (
                <div className="ui card">
                  <FlagCard
                    countryCode={client.countryCode}
                    content={client.content}
                  >
                    <UserDetail details={client}></UserDetail>
                  </FlagCard>
                </div>
              ))}
        </div>
      )}
    </div>
  );
}

export default App;
