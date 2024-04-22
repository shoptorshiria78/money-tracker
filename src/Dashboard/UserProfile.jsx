import ExpenseTable from "../Component/ExpenseTable";
import useExpense from "../Hooks/useExpense";
import useIncome from "../Hooks/useIncome";


const UserProfile = () => {

    const [income] = useIncome()
    const [expense] = useExpense()

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
            <div className="flex justify-around text-center font-bold text-xl">
                <div className="w-[250px] bg-gradient-to-r from-emerald-300 to-lime-200 h-[100px] text-emerald-600 rounded-2xl">
                    <p className="mt-7">Total Income</p>
                    {totalIncome}
                    </div>
                <div className="w-[250px] bg-gradient-to-r from-emerald-300 to-lime-200 h-[100px] text-emerald-600 rounded-2xl">
                <p className="mt-7">Total Expense</p>
                {totalExpense}
                </div>
            </div>
            <div className="flex justify-center mt-10 font-bold text-xl">
                <div className="w-[250px] bg-gradient-to-r from-emerald-300 to-lime-200 h-[100px] text-emerald-600 rounded-2xl text-center">
                <p className="mt-7">Net Income</p>
                    {netWorth}</div>
            </div>

            <ExpenseTable></ExpenseTable>
        </div>
    );
};

export default UserProfile;