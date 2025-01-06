import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { BarChart, Margin, PieChart, ShowChart } from "@mui/icons-material";
import { Bar, Pie, Line, Doughnut, Radar } from "react-chartjs-2";

// Import and register Chart.js components
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   LineElement,
   PointElement,
   ArcElement,
   RadialLinearScale,
   Title,
   Tooltip,
   Legend,
} from "chart.js";

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   LineElement,
   PointElement,
   ArcElement,
   RadialLinearScale,
   Title,
   Tooltip,
   Legend
);

const stats = [
   {
      title: "Total Students",
      value: "1,200",
      icon: <BarChart sx={{ fontSize: 48, color: "#2196F3" }} />,
   },
   {
      title: "Active Teachers",
      value: "250",
      icon: <ShowChart sx={{ fontSize: 48, color: "#4CAF50" }} />,
   },
   {
      title: "Pending Exams",
      value: "15",
      icon: <PieChart sx={{ fontSize: 48, color: "#FF9800" }} />,
   },
   {
      title: "Total Courses",
      value: "80",
      icon: <ShowChart sx={{ fontSize: 48, color: "#673AB7" }} />,
   },
];

// Data for the charts
const barData = {
   labels: ["January", "February", "March", "April", "May", "June"],
   datasets: [
      {
         label: "Enrollments",
         data: [120, 150, 180, 200, 170, 210],
         backgroundColor: "rgba(33, 150, 243, 0.5)",
         borderColor: "rgba(33, 150, 243, 1)",
         borderWidth: 1,
      },
   ],
};

const pieData = {
   labels: ["Math", "Science", "History", "Language"],
   datasets: [
      {
         data: [25, 35, 20, 20],
         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
   ],
};

const lineData = {
   labels: ["January", "February", "March", "April", "May", "June"],
   datasets: [
      {
         label: "Performance",
         data: [70, 80, 90, 100, 95, 110],
         fill: false,
         borderColor: "rgba(76, 175, 80, 1)",
         tension: 0.3,
      },
   ],
};

const doughnutData = {
   labels: ["Completed", "In Progress", "Pending"],
   datasets: [
      {
         data: [60, 30, 10],
         backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
      },
   ],
};

const radarData = {
   labels: ["Math", "Science", "History", "Art", "Sports", "Language"],
   datasets: [
      {
         label: "Average Scores",
         data: [85, 90, 78, 88, 76, 95],
         backgroundColor: "rgba(63, 81, 181, 0.2)",
         borderColor: "rgba(63, 81, 181, 1)",
         pointBackgroundColor: "rgba(63, 81, 181, 1)",
      },
   ],
};

// console.log("--------------" + localStorage.getItem("token"));


const Rapport = () => {
   return (
      <div>
         <Box
            sx={{
               padding: 3,
               backgroundColor: "#F4F6F8",
               minHeight: "100vh",
               overflowY: "auto",
            }}
         >
            {/* Title */}
            <Typography
               variant="h4"
               sx={{
                  marginBottom: 3,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#333",
               }}
            >
               Dashboard Statistics
            </Typography>

            {/* Statistics Section */}
            <Grid container spacing={3} sx={{ marginBottom: 3 }}>
               {stats.map((stat, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                     <Card
                        sx={{
                           textAlign: "center",
                           boxShadow: 3,
                           borderRadius: 3,
                           transition: "transform 0.3s",
                           "&:hover": {
                              transform: "scale(1.05)",
                           },
                        }}
                     >
                        <CardContent>
                           <Box
                              sx={{
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 marginBottom: 2,
                              }}
                           >
                              {stat.icon}
                           </Box>
                           <Typography variant="h6" sx={{ color: "#555" }}>
                              {stat.title}
                           </Typography>
                           <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                              {stat.value}
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>

            {/* Charts Section */}
            <Grid container spacing={3}>
               <Grid item xs={12} md={6}>
                  <Card sx={{ boxShadow: 3, borderRadius: 3, padding: 2 }}>
                     <Typography variant="h6" sx={{ marginBottom: 2 }}>
                        Monthly Enrollments
                     </Typography>
                     <Bar data={barData} />
                  </Card>
                  <Card style={{ margin: 20 }}></Card>
                  <Card sx={{ boxShadow: 3, borderRadius: 3, padding: 2 }}>
                     <Typography variant="h6" sx={{ marginBottom: 2 }}>
                        Performance Trend
                     </Typography>
                     <Line data={lineData} />
                  </Card>
               </Grid>

               <Grid item xs={12} md={6}>
                  <Card sx={{ boxShadow: 3, borderRadius: 3, padding: 2 }}>
                     <Typography variant="h6" sx={{ marginBottom: 2 }}>
                        Course Distribution
                     </Typography>
                     <Pie data={pieData} />
                  </Card>
               </Grid>

               <Grid item xs={12} md={6}>
               </Grid>

               {/* <Grid item xs={12} md={6}>
                  <Card sx={{ boxShadow: 3, borderRadius: 3, padding: 2 }}>
                     <Typography variant="h6" sx={{ marginBottom: 2 }}>
                        Completion Status
                     </Typography>
                     <Doughnut data={doughnutData} />
                  </Card>
               </Grid> */}

            </Grid>
         </Box>
      </div>
   );
};

export default Rapport;
