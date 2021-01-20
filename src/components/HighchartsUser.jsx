import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import moment from "moment";

const filter = (totalAccess) => {
  let name = null;
  let series = [];
  let data = [];
  let count = 0;
  let fecha1 = moment();
  let fecha2 = null;

  for (let i = 0; i < totalAccess.length; i++) {
    name = totalAccess[i].date;
    fecha2 = moment(name);
    console.log("Diferencias ", fecha1.diff(fecha2, "days"));
    if (fecha1.diff(fecha2, "days") <= 7) {
      count++;
      for (let j = i + 1; j < totalAccess.length; j++) {
        if (totalAccess[j].date === name) {
          count++;
        }
      }
      const find = series.filter(
        (element) => element.name === totalAccess[i].date
      );
      if (find.length === 0) {
        data.push(["Cantidad:", count]);
        series.push({ name: name, data: data });
      }
      count = 0;
      data = [];
    }
  }

  console.log("Series ==> ", series);

  return series;
};

const HighchartsUser = () => {
  const userAccess = useSelector((state) => state.myuser.userLog.totalAccess);
  console.log(userAccess);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Conexiones en la ultima semana",
    },
    series: filter(userAccess),
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HighchartsUser;
