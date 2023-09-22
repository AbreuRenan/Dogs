import React from "react";
import Head from "../Helpers/Head";
import useFetch from "../../Hooks/useFetch";
import { GET_STATS } from "../../api";
import LoadingAnimation from "../Helpers/LoadingAnimation";
import ErroComponent from "../Helpers/ErroComponent";
// import UserStatsGraphs from "./UserStatsGraphs";

const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

function UserStats() {
  const { data, error, loading, request } = useFetch();
  const token = window.localStorage.getItem("token");

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS(token);
      const { response, json } = await request(url, options);
    }
    getData();
  }, [request, token]);
  if (loading) return <LoadingAnimation />;
  if (error) return <ErroComponent msg={error} />;
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else {
    return null;
  }
}

export default UserStats;
