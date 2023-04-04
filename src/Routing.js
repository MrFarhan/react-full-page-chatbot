import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Chat from "./Pages/Chat";
import PageNotFound from "./Pages/PageNotFound";
import { URL } from "./utils/constant";

function Routing() {
  // eslint-disable-next-line
  const [searchParams, _] = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const clientId = searchParams.get("clientId");
  const sheetId = searchParams.get("sheetId");
  const tabId = searchParams.get("tabId");
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
        setQuestions(response.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error is", err);
        setLoading(false);
      });
  }, [clientId, surveyId]);
  return (
    <Routes>
      <Route
        path="*"
        element={
          surveyId &&
          clientId &&
          sheetId &&
          tabId &&
          !loading &&
          !!questions?.length ? (
            <Chat questions={questions} />
          ) : (
            <PageNotFound loading={loading} />
          )
        }
      />
    </Routes>
  );
}

export default Routing;
