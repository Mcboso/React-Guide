import styles from "./Result.module.css";

const formatter = new
 Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const calculatedList = (props) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +props.input["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +props.input["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +props.input["expected-return"] / 100;
    const duration = +props.input["duration"];

    let interestSum = 0;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        interestSum += yearlyInterest;

        yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            totalSavings: currentSavings,
            yearlyInterest: yearlyInterest,
            totalInterest: interestSum,
            investedCapital: currentSavings - interestSum,
        });
    }

    console.log(yearlyData);

    // do something with yearlyData ...
    return (
        <table className={styles["result"]}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {yearlyData.map((year) => {
                    return (
                        <tr key={year.year}>
                            <td>{year.year}</td>
                            <td>
                                ${formatter.format(year.totalSavings)}
                            </td>
                            <td>
                                ${formatter.format(year.yearlyInterest)}
                            </td>
                            <td>
                                ${formatter.format(year.totalInterest)}
                            </td>
                            <td>
                                ${formatter.format(year.investedCapital)}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default calculatedList;
