import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard, { StatCardProps } from './StatCard';

const data: StatCardProps[] = [
  {
    title: 'Users',
    value: '/images/image1.avif',
    interval: 'Last 30 days',
    trend: 'up',
  },
  {
    title: 'Conversions',
    value: '/images/image2.avif',
    interval: 'Last 30 days',
    trend: 'down',
  },
  {
    title: 'Event count',
    value: '/images/image3.avif',
    interval: 'Last 30 days',
    trend: 'neutral',
  },
];

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Stack direction="row" spacing={2}>
</Stack>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        
       
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
