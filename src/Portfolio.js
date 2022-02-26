import { render } from "@testing-library/react";
import React, { useEffect } from 'react';
import {useState} from "react";
import Css from "./cv.css";

function Portfolio() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/FilipOmn/repos'
        );
        if (!response.ok) {
          throw new Error(
            'Error occured'
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])

  return (

    <main>
       {loading && <div>loading..</div>}
      {error && (
        <div>{'Unable to fetch data..'}</div>
      )}     

      <ul id="GithubRepoList">
        {data && data.map(({ id, name, description, html_url }) => (
            <li className="GithubRepoInfo" key={id}>
              <h3>{name}</h3>
              <p>{description}</p>
              <a href={html_url}>{html_url}</a>
              <br />
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Portfolio;