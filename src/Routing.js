import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, useSearchParams } from "react-router-dom";
import Chat from "./Pages/Chat";
import Welcome from "./Pages/Welcome";
import { URL } from "./utils/constant";

function Routing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const clientId = searchParams.get("clientId");
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL}/get-questions`,
      params: {
        clientId,
        surveyId,
      },
    })
      .then(function (response) {
        console.log("response is", response.data);
        setQuestions(response.data.response.Questions);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error is", err);
        setLoading(false);
      });
  }, []);

  return (
    <Routes>
      <Route
        path="*"
        element={
          surveyId && clientId && !loading && !!questions?.length ? (
            <Chat questions={questions}/>
          ) : (
            <Welcome loading={loading} />
          )
        }
      />
    </Routes>
  );
}

export default Routing;
