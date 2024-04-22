import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UpdateExpense = () => {
    const expenseData = useLoaderData()
    console.log(expenseData);
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);


    const handleUpdateExpense = (e) => {
        e.preventDefault();
        const form = e.target;
        const expense = form.expense.value || "Not Given";
        const date = form.date.value || "Not Given";
        const category = form.category.value || "Not Given";
        const email = user.email || "Not Given"
        console.log(expense, date, category, email);
        const expenseInput = { expense, date, category, email }

        axios.put(`https://money-tracker-server-three.vercel.app/updateExpense/${expenseData._id}`, expenseInput)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    toast.success("Your expense has been Updated")
                    window.reload()
                }
                
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="mt-20">
            <form onSubmit={handleUpdateExpense} className="w-full mb-4 bg-green-100 px-5 py-4 " action="">

                <div className=" w-full ">
                    <div className="w-full flex justify-center mb-2">
                        <img className="h-[250px]" src="https://i.ibb.co/b1wtvTN/q1dd-dmyg-230711.jpg" alt="" />
                    </div>


                    <p className=" text-emerald-600 font-bold text-center py-3 text-4xl lg:text-xl">Update Your Expense Here</p>

                    <div className="flex justify-between items-center">

                        <div className="ml-4  mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Add Expense</span>
                            </label>
                            <input defaultValue={expenseData.expense} name="expense" className=" w-full h-12 mt-2 px-4" type="text" />
                        </div>
                        <div className="ml-4  mt-5 w-1/2">
                            <label className="label">
                                <p className="label-text text-emerald-600 font-bold text-base lg:text-xl mb-2"> Date</p>
                            </label>
                            <DatePicker defaultValue={expenseData.date} name="date" className="w-full h-12 px-6 border" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className=" pl-5 pr-12  mt-5 w-full">
                        <label className="label">
                            <p className="label-text text-emerald-600 font-bold text-base lg:text-xl mb-3">Category</p>
                        </label>
                        <select defaultValue={expenseData.category} name="category" className=" w-full h-12 px-4">
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
                <input className="w-full bg-[#4caf50] text-white rounded-xl font-bold text-xl h-12 my-[27px]" type="submit" value="Update Expense" />
            </form>

        </div>
    );
};

export default UpdateExpense;