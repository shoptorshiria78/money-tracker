import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import useExpense from '../Hooks/useExpense';
import useIncome from '../Hooks/useIncome';
import { Typography } from '@mui/material';



const StatLineCharts = () => {

    const [expense] = useExpense()
    const [income] = useIncome()


    console.log(income);
    console.log(expense);
    const totalIncome = income.reduce((acc, item) => {
        const incomeNum = parseInt(item.income);
        return acc += incomeNum
    }, 0)
    console.log(totalIncome)

    const totalExpense = expense.reduce((acc, item) => {
        const expenseNum = parseInt(item.expense);
        return acc += expenseNum
    }, 0)
    console.log(totalExpense)

    const netWorth = totalIncome - totalExpense
    console.log(netWorth)


    const data = [

        { name: 'Total Income', value: totalIncome },
        { name: 'Total Expense', value: totalExpense },
        { name: 'Net Savings', value: netWorth },


    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='flex justify-around items-center'>
            <div>
                <Typography sx={{fontSize:24, fontWeight:600, textAlign:"center", color:"#41B06E", mb:6, ml:15, width:300}}> The liner graph of expense is given below</Typography>
                <LineChart
                    width={500}
                    height={500}
                    data={expense}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="expense" stroke="#8884d8" activeDot={{ r: 8 }} />

                </LineChart>
            </div>

            <div>
            <Typography sx={{fontSize:24, fontWeight:600, textAlign:"center", color:"#41B06E", mb:6, width:400}}> Income Expense And Savings is shown In Pie chart</Typography>
                <PieChart width={500} height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                       
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}   />
                        ))}
                    </Pie>
                </PieChart>

            </div>

        </div>
    );
};

export default StatLineCharts;