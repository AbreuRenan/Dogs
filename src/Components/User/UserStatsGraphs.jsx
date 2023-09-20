import React from "react";
import { VictoryPie, VictoryBar, VictoryChart } from "victory";

import styles from "./USG.module.css";

function UserStatsGraphs({ data }) {
  const [graphData, setGraphData] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(
      data?.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
    setGraphData(
      data?.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      })
    );
  }, [data]);
  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        Acessos: {total}
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graphData}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart domainPadding={{ x: [20, 50] }}>
          <VictoryBar data={graphData} alignment="start" />
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
