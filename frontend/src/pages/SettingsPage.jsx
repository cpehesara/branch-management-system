import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Switch,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const SettingsPage = () => {
  const [language, setLanguage] = useState("english");
  const [timezone, setTimezone] = useState("GMT+5:30");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    console.log("Settings saved.");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Preferences
          </Typography>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Enable Notifications"
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Switch />}
            label="Dark Mode"
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Switch />}
            label="Auto Logout after 10 minutes"
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Personalization
          </Typography>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Language</InputLabel>
            <Select
              value={language}
              label="Language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="sinhala">සිංහල</MenuItem>
              <MenuItem value="tamil">தமிழ்</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Timezone</InputLabel>
            <Select
              value={timezone}
              label="Timezone"
              onChange={(e) => setTimezone(e.target.value)}
            >
              <MenuItem value="GMT+5:30">GMT+5:30 (Sri Lanka)</MenuItem>
              <MenuItem value="GMT+0">GMT+0 (UTC)</MenuItem>
              <MenuItem value="GMT+8">GMT+8 (Singapore)</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Account Settings
          </Typography>
          <TextField
            fullWidth
            label="Recovery Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter backup email"
            sx={{ mb: 3 }}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        sx={{ mt: 2, borderRadius: 3 }}
        onClick={handleSave}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default SettingsPage;
