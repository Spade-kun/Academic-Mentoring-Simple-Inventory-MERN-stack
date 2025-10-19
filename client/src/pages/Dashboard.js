import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Inventory, Category, Business } from '@mui/icons-material';

const Dashboard = () => {
  const stats = [
    { title: 'Total Products', value: '0', icon: <Inventory sx={{ fontSize: 40 }} /> },
    { title: 'Total Categories', value: '0', icon: <Category sx={{ fontSize: 40 }} /> },
    { title: 'Total Suppliers', value: '0', icon: <Business sx={{ fontSize: 40 }} /> }
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={4} key={stat.title}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                {stat.icon}
                <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                  {stat.value}
                </Typography>
                <Typography color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;