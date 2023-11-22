import { Fragment, useEffect, useState } from "react";
// import supabase from "./supabase";
import "./App.style.css";
import Header from "./Component/Header";
import NewFactForm from "./Component/NewFactForm";
import CategoryFilter from "./Component/CategoryFilter";
import Loader from "./Component/Loader";
import FactList from "./Component/FactList";
import { initialFacts } from "./utils";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        // let query = supabase.from("facts").select("*");

        // if (currentCategory !== "all")
        //   query = query.eq("category", currentCategory);

        // const { data: facts, error } = await query
        //   .order("votesInteresting", { ascending: false })
        //   .limit(1000);

        // if (!error) {
        //   setFacts(facts);
        // } else {
        //   alert("There was a problem getting data");
        // }

        setFacts(initialFacts);
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  ); // this empty array won't re-fetch the data after every update in state which is necessary

  return (
    <Fragment>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {/* use state variable */}
      {showForm ? (
        <NewFactForm setShowForm={setShowForm} setFacts={setFacts} />
      ) : null}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />

        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
      </main>
    </Fragment>
  );
};

export default App;
