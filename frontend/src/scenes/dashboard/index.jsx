import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Header from "../../components/Header";
import * as React from "react";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const theme = useTheme();

  const branches = [
    { branchid: 1, branch_name: "Colombo HQ", createdAt: "2024-04-01T10:00:00", updatedAt: "2024-04-10T08:30:00" },
    { branchid: 2, branch_name: "Kandy Branch", createdAt: "2024-03-25T14:20:00", updatedAt: "2024-04-05T09:00:00" },
    { branchid: 3, branch_name: "Galle Branch", createdAt: "2024-02-15T11:00:00", updatedAt: "2024-04-01T16:45:00" },
  ];

  const employees = [
    { employeeid: 101, employee_name: "Alice Perera", createdAt: "2024-04-08T09:15:00", updatedAt: "2024-04-09T10:00:00", status: "active" },
    { employeeid: 102, employee_name: "Bob Silva", createdAt: "2024-03-28T13:45:00", updatedAt: "2024-04-02T15:20:00", status: "inactive" },
    { employeeid: 103, employee_name: "Charlie Fernando", createdAt: "2024-03-18T08:30:00", updatedAt: "2024-04-06T11:00:00", status: "active" },
    { employeeid: 104, employee_name: "Dinesh Kumar", createdAt: "2024-04-12T10:00:00", updatedAt: "2024-04-12T10:15:00", status: "active" },
  ];

  const departments = [
    { departmentid: 1, department_name: "HR", createdAt: "2024-01-01T08:00:00", updatedAt: "2024-04-03T09:45:00" },
    { departmentid: 2, department_name: "IT", createdAt: "2024-01-10T09:00:00", updatedAt: "2024-04-07T13:30:00" },
    { departmentid: 3, department_name: "Finance", createdAt: "2024-02-01T10:00:00", updatedAt: "2024-03-20T16:00:00" },
  ];

  const recentActivities = [
    ...branches
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 3)
      .map((branch) => ({
        title: `Branch added/updated: ${branch.branch_name}`,
        time: `Branch ID: ${branch.branchid}, Last Updated: ${new Date(branch.updatedAt).toLocaleString()}`,
      })),
    ...employees
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 3)
      .map((employee) => ({
        title: `Employee added/updated: ${employee.employee_name}`,
        time: `Employee ID: ${employee.employeeid}, Last Updated: ${new Date(employee.updatedAt).toLocaleString()}`,
      })),
    ...departments
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 2)
      .map((department) => ({
        title: `Department added/updated: ${department.department_name}`,
        time: `Department ID: ${department.departmentid}, Last Updated: ${new Date(department.updatedAt).toLocaleString()}`,
      })),
  ];

  const quickStats = [
    { label: "Total Branches", value: branches.length },
    { label: "Active Employees", value: employees.filter((e) => e.status === "active").length },
    { label: "Departments", value: departments.length },
    { label: "Total Employees", value: employees.length },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 4 }}>

        <Card sx={{ width: 350, bgcolor: theme.palette.background.paper, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom color="text.primary">
              Calendar
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
                sx={{
                  "& .MuiPickersDay-root": {
                    color: theme.palette.text.primary,
                    fontSize: "1.1rem", 
                  },
                }}
              />
            </LocalizationProvider>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 300, bgcolor: theme.palette.background.paper, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom color="text.primary">
              Recent Activities
            </Typography>
            <List>
              {recentActivities.map((activity, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={activity.title}
                      secondary={activity.time}
                      primaryTypographyProps={{ color: "text.primary" }}
                      secondaryTypographyProps={{ color: "text.secondary" }}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 250, bgcolor: theme.palette.background.paper, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom color="text.primary">
              Quick Stats
            </Typography>
            <Stack spacing={2} mt={2}>
              {quickStats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 2,
                    bgcolor: theme.palette.mode === "dark" ? "grey.800" : "grey.100",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="text.primary">
                    {stat.value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
