import { useEffect, useState } from "react";
import "./App.css";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [isLoading, SetIsLoading] = useState(true);
  const [defaultPage, SetDefaultPage] = useState("comments");
  const [headerItems, SetHeaderItems] = useState([
    {
      id: 1,
      value: "users",
      url: "https://jsonplaceholder.typicode.com/users",
    },
    {
      id: 2,
      value: "posts",
      url: "https://jsonplaceholder.typicode.com/posts",
    },
    {
      id: 3,
      value: "comments",
      url: "https://jsonplaceholder.typicode.com/comments",
    },
  ]);

  const [jsonContent, SetJsonContent] = useState([]);

  const handleButtonClick = async (id) => {
    SetIsLoading(true);
    const currentItem = [...headerItems];
    const url = currentItem.filter((item) => item.id == id)[0].url;

    try {
      const getOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, getOptions);
      if (!response.ok) throw Error("No Data Found");
      const parsedResponse = await response.json();
      SetJsonContent(parsedResponse);
      console.log(parsedResponse);
    } catch (err) {
    } finally {
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchDefaultData = async () => {
      const currentItem = [...headerItems];
      const url = currentItem.filter((item) => item.value === defaultPage)[0]
        .url;

      try {
        const getOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(url, getOptions);
        if (!response.ok) throw Error("No Data Found");
        const parsedResponse = await response.json();
        SetJsonContent(parsedResponse);
        console.log(parsedResponse);
      } catch (err) {
      } finally {
        SetIsLoading(false);
      }
    };
    const callDefaultPage = (async () => await fetchDefaultData())();
    //fetchDefaultData();
  }, []);

  return (
    <div className="App">
      <Header headerItems={headerItems} handleButtonClick={handleButtonClick} />
      <main>
        <Content jsonContent={jsonContent} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;
