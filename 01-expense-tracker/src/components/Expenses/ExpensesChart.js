import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const charDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for (const expense of props.expenses) {
        // 객체가 아니라 배열이므로 of 사용 
        const expenseMonth = expense.date.getMonth();
        charDataPoints[expenseMonth].value = expense.amount;
    };
    
    return (
        <Chart dataPoints={charDataPoints} />
    );
}

export default ExpensesChart;