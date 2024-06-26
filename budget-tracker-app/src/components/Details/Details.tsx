import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions';

interface DeatailsProps {
  title: string;
  subheader: string;
}
const Details: React.FC<DeatailsProps> = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant='h5'>${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Details;