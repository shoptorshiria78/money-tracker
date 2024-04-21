import useExpense from "../Hooks/useExpense";
import useIncome from "../Hooks/useIncome";


const UserProfile = () => {

    const [income, reload] = useIncome()
    const [expense, reloadx] = useExpense()

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

    return (
        <div className="mt-20">
            this is user profile
        </div>
    );
};

export default UserProfile;