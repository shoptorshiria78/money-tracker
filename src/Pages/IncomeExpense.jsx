import axios from "axios";
import NavBar from "../Shared/NavBar";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const IncomeExpense = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);

    const handleIncome = (e) => {
        e.preventDefault();
        const form = e.target;
        const income = form.income.value || "Not Given";
        const date = form.date.value || "Not Given";
        const email = user.email ||  "Not Given"
        console.log(income, date, email);
        const incomeInput = { income, date, email }

        axios.post("https://money-tracker-server-three.vercel.app/income", incomeInput)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success("Your Income has been saved")
                }
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })

    }
    const handleExpense = (e) => {
        e.preventDefault();
        const form = e.target;
        const expense = form.expense.value || "Not Given";
        const date = form.date.value || "Not Given";
        const category = form.category.value || "Not Given";
        const email = user.email ||  "Not Given"
        console.log(expense, date, category, email);
        const expenseInput = { expense, date, category,email }

        axios.post("https://money-tracker-server-three.vercel.app/expense", expenseInput)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success("Your expense has been saved")
                }
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="flex">
                <div className="flex-1">
                    <img className="h-[548px]" src="https://i.ibb.co/YpnYxnd/money-Banner-5.jpg" alt="income pic" />
                </div>
                <div className="flex-1">
                    <form onSubmit={handleIncome} className="w-full mb-4 bg-green-100 px-5 py-4 " action="">

                        <div className=" w-full ">
                            <div className="w-full flex justify-center mb-2">
                                <img className="h-[250px]" src="https://i.ibb.co/J7Qy3Nn/63472.jpg" alt="" />
                            </div>


                            <p className=" text-emerald-600 font-bold text-center py-3 text-4xl lg:text-xl">Add Your Income Here</p>

                            <div className="flex justify-between items-center">

                                <div className="ml-4  mt-5 w-1/2">
                                    <label className="label">
                                        <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Add Income</span>
                                    </label>
                                    <input name="income" className=" w-full h-12 mt-2 px-4" type="text" />
                                </div>
                                <div className="ml-4  mt-5 w-1/2">
                                    <label className="label">
                                        <p className="label-text text-emerald-600 font-bold text-base lg:text-xl mb-2"> Date</p>
                                    </label>
                                    <DatePicker name="date" className="w-full h-12 px-6 border" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>


                        </div>
                        <input className="w-full bg-[#4caf50] text-white rounded-xl font-bold text-xl h-12 my-[27px]" type="submit" value="Save Income" />
                    </form>
                </div>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <form onSubmit={handleExpense} className="w-full mb-4 bg-green-100 px-5 py-4 " action="">

                        <div className=" w-full ">
                            <div className="w-full flex justify-center mb-2">
                                <img className="h-[250px]" src="https://i.ibb.co/b1wtvTN/q1dd-dmyg-230711.jpg" alt="" />
                            </div>


                            <p className=" text-emerald-600 font-bold text-center py-3 text-4xl lg:text-xl">Add Expense Here</p>

                            <div className="flex justify-between items-center">

                                <div className="ml-4  mt-5 w-1/2">
                                    <label className="label">
                                        <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Add Expense</span>
                                    </label>
                                    <input name="expense" className=" w-full h-12 mt-2 px-4" type="text" />
                                </div>
                                <div className="ml-4  mt-5 w-1/2">
                                    <label className="label">
                                        <p className="label-text text-emerald-600 font-bold text-base lg:text-xl mb-2"> Date</p>
                                    </label>
                                    <DatePicker name="date" className="w-full h-12 px-6 border" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div className=" pl-5 pr-12  mt-5 w-full">
                                <label className="label">
                                    <p className="label-text text-emerald-600 font-bold text-base lg:text-xl mb-3">Category</p>
                                </label>
                                <select name="category" className=" w-full h-12 px-4">
                                    <option value="Groceries">Groceries</option>
                                    <option value="Laundry">Laundry</option>
                                    <option value="Vegetable">Vegetable</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Fish">Fish</option>
                                    <option value="Transport">Transport</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                </select>
                            </div>



                        </div>
                        <input className="w-full bg-[#4caf50] text-white rounded-xl font-bold text-xl h-12 my-[27px]" type="submit" value="Save Expense" />
                    </form>
                </div>
                <div className="flex-1">
                    <img className="h-[655px]" src="https://i.ibb.co/vYnvKGY/expense.jpg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default IncomeExpense;