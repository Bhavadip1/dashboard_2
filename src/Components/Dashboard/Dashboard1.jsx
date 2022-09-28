import { Button, Card, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import USAMap from "react-usa-map";
import Chart from "chart.js/auto";
import "./Dashboard1.css";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import { ShoppingBagOutlined } from "@mui/icons-material";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { Line, Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
  datasets: [
    {
      label: "First dataset",
      data: [28, 48, 35, 25, 80, 29, 90],
      fill: true,
      backgroundColor: "#4b94bf",
      borderColor: "#4b94bf",
      tension: 0.4,
    },
    {
      label: "Second dataset",
      data: [65, 60, 80, 77, 55, 53, 40],
      fill: true,
      borderColor: "#d2d6de",
      backgroundColor: "rgba(210,214,222,1)",
      tension: 0.4,
      order: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        display: false,
      },
    },
  },
};

const data2 = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [30, 12, 20],
      backgroundColor: [
        "rgb(245, 105, 84)",
        "rgb(0, 166, 90)",
        "rgb(243, 156, 18)",
      ],
      hoverOffset: 4,
    },
  ],
};
const options2 = {
  plugins: {
    legend: {
      display: false,
    },
  },
  aspectRatio: 3,
  responsive: true,
};

export const Dashboard1 = () => {
  const [Chartshow, setChartShow] = useState(true);

  const handleChartShow = () => {
    setChartShow(true);
  };

  const handleChartHide = () => {
    setChartShow(false);
  };

  return (
    <div>
      <div>
        <Typography className="heder_main" variant="h5">
          Dashboard
        </Typography>
      </div>

      <Grid
        className="grid_main"
        container
        direction="row"
        columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 2 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Item className="box_item_1">
            <div className="box_1">
              <div className="inner_box">
                <Typography variant="h4">150</Typography>
                <Typography variant="p">New Orders</Typography>
              </div>
              <div className="inner_box_icon">
                <ShoppingBagOutlined className="bag_icon" />
              </div>
            </div>
            <Button className="more_info_button">
              More info <i class="fas fa-arrow-circle-right arrow_icon"></i>
            </Button>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item className="box_item_2">
            <div className="box_2">
              <div className="inner_box">
                <Typography variant="h4">53%</Typography>
                <Typography variant="p">Bounce Rate</Typography>
              </div>
              <div className="inner_box_icon">
                <EqualizerOutlinedIcon className="chart_icon" />
              </div>
            </div>
            <Button className="more_info_button_2">
              More info <i class="fas fa-arrow-circle-right arrow_icon"></i>
            </Button>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item className="box_item_3">
            <div className="box_3">
              <div className="inner_box yellow">
                <Typography variant="h4">44</Typography>
                <Typography variant="p">User Ragistration</Typography>
              </div>
              <div className="inner_box_icon">
                <PersonAddAlt1OutlinedIcon className="person_icon" />
              </div>
            </div>
            <Button className="more_info_button_3">
              More info <i class="fas fa-arrow-circle-right arrow_icon"></i>
            </Button>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item className="box_item_4">
            <div className="box_4">
              <div className="inner_box">
                <Typography variant="h4">65</Typography>
                <Typography variant="p">Unique Visitors</Typography>
              </div>
              <div className="inner_box_icon">
                <i class="fas fa-chart-pie pie_chart_icon"></i>
              </div>
            </div>
            <Button className="more_info_button_4">
              More info <i class="fas fa-arrow-circle-right arrow_icon"></i>
            </Button>
          </Item>
        </Grid>
      </Grid>
      <Grid
        className="grid_main"
        container
        direction="row"
        columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 2 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={7}>
          <Item className="box_chart">
            <Card className="chart_card">
              <div className="card_header">
                <Typography variant="p" className="typo_sales">
                  <i class="fa-solid fa-chart-pie header_chart_icon"></i>Sales
                </Typography>
                <div className="chat_btn">
                  <Button
                    onClick={() => setChartShow(false)}
                    className="btn_area"
                  >
                    Area
                  </Button>
                  <Button
                    onClick={() => setChartShow(true)}
                    className="btn_donut"
                  >
                    Donut
                  </Button>
                </div>
              </div>
              <Divider />
              <div className="chart_main_box">
                {!Chartshow ? (
                  <div className="line_chart">
                    <Line data={data} options={options} />
                  </div>
                ) : (
                  <div className="donut_chart">
                    <Doughnut data={data2} options={options2}></Doughnut>
                  </div>
                )}
              </div>
            </Card>
          </Item>
        </Grid>

        <Grid item xs={5}>
          <Item className="box_map">
            <Card className="map_card">
              <div className="map_card_header">
                <Typography variant="p" className="typo_visitors">
                  <i class="fa-solid fa-location-dot header_map_icon"></i>
                  Visitors
                </Typography>
                <div>
                  <Button className="btn_calender">
                    <i class="fa-solid fa-calendar-days"></i>
                  </Button>
                  <Button className="btn_less">
                    <i class="fa-solid fa-minus"></i>
                  </Button>
                </div>
              </div>
              <div className="map_section"></div>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};
