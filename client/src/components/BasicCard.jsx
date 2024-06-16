import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ChartComponent from '../ChartComponent';

function DataCard({ title, data }) {
  // ... (API consumption logic)

  return (
    <Card sx={{ minWidth: 575, minHeight: 500 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <ChartComponent data={data} />
      </CardContent>
    </Card>
  );
}

export default DataCard;