import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress, Alert } from '@mui/material';
import { Inventory, Category, Business } from '@mui/icons-material';
import productService from '../services/product.service';
import categoryService from '../services/category.service';
import supplierService from '../services/supplier.service';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    suppliers: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [products, categories, suppliers] = await Promise.all([
        productService.getAll(),
        categoryService.getAll(),
        supplierService.getAll()
      ]);

      setStats({
        products: products.length,
        categories: categories.length,
        suppliers: suppliers.length
      });
    } catch (err) {
      setError('Failed to fetch dashboard statistics. Please make sure all services are running.');
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const dashboardCards = [
    { title: 'Total Products', value: stats.products, icon: <Inventory sx={{ fontSize: 40 }} />, color: '#1976d2' },
    { title: 'Total Categories', value: stats.categories, icon: <Category sx={{ fontSize: 40 }} />, color: '#2e7d32' },
    { title: 'Total Suppliers', value: stats.suppliers, icon: <Business sx={{ fontSize: 40 }} />, color: '#ed6c02' }
  ];

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {dashboardCards.map((stat) => (
          <Grid item xs={12} sm={4} key={stat.title}>
            <Card sx={{ borderTop: `4px solid ${stat.color}` }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <div style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <Typography variant="h3" component="div" sx={{ mt: 2, fontWeight: 'bold' }}>
                  {stat.value}
                </Typography>
                <Typography color="text.secondary" variant="h6">
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