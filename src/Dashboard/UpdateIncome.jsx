import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UpdateIncome = () => {
    const IncomeData = useLoaderData();
    console.log(IncomeData)
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);


    const handleUpdateIncome = (e) => {
        e.preventDefault();
        const form = e.target;
        const income = form.income.value || "Not Given";
        const date = form.date.value || "Not Given";
        const email = user.email ||  "Not Given"
        console.log(income, date, email);
        const incomeInput = { income, date, email }

        axios.put(`http://localhost:5000/updateIncome/${IncomeData._id}`, incomeInput)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    toast.success("Your Income has been updated")
                    window.reload()
                }
               
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="mt-20 flex justify-center">

            <form onSubmit={handleUpdateIncome} className="w-1/2 mb-4 bg-green-100 px-5 py-4 " action="">

                <div className=" w-full ">
                    <div className="w-full flex justify-center mb-2">
                        <img className="h-[250px]" src="https://i.ibb.co/J7Qy3Nn/63472.jpg" alt="" />
                    </div>


                    <p className=" text-emerald-600 font-bold text-center py-3 text-4xl lg:text-xl">Update Your Income Here</p>

                    <div className="flex justify-between items-center">

                        <div className="ml-4  mt-5 w-1/2">
                            <label className="label">
                                <span className="label-text text-emerald-600 font-bold text-base lg:text-xl">Add Income</span>
                            </label>
                            <input defaultValue={IncomeData.income}  name="income" className=" w-full h-12 mt-2 px-4" type="text" />
                        </div>
                        <div className="ml-4  mt-5 w-1/2">
                            <label className="label">
                                <p className="label-text text-emerald-600 font-bold text-base lg:text-xl mb-2"> Date</p>
                            </label>
                            <DatePicker defaultValue={IncomeData.date}name="date" className="w-full h-12 px-6 border" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>


                </div>
                <input className="w-full bg-[#4caf50] text-white rounded-xl font-bold text-xl h-12 my-[27px]" type="submit" value="Update Income" />
            </form>
        </div>
    );
};

export default UpdateIncome;