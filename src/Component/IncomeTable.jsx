
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useIncome from '../Hooks/useIncome';

function createData(income, date, email, _id) {
    return {income, date, email, _id };
}


export default function IncomeTable() {

    const [income, reload] = useIncome();
    const navigate = useNavigate();



    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://money-tracker-server-three.vercel.app/deleteIncome/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success("Your Income is deleted")
                            reload()
                        }
                    }).catch(error => {
                        toast.error("Something was wrong");
                        console.log(error)
                    });
            }
        });

    }
    const handleUpdateIncome = (id) =>{
        navigate(`/dashboard/updateIncome/${id}`)
    }


    const rows = income.map((item) => createData(item.income, item.date, item.email, item._id))


    return (

        <div className="md:min-w-[1200px] mx-auto overflow-x-auto overflow-y-auto mt-10">
            <Typography sx={{fontSize:24 , fontWeight:"600", textAlign:
        "center", my:6}}>Incomes are given Here</Typography>
            <TableContainer component={Paper} elevation={5} sx={{ p: 5, ml: 10 }}>
                <Table sx={{ width: 1000, p: 3 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#4caf50", px: 4 }}>
                        <TableRow>
                            <TableCell sx={{ color: "white", fontWeight: 600 }} align="left" >No</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: 600 }} align="left">Income</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: 600 }} align="left"> Date</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: 600 }} align="left"> Email</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: 600 }} align="left">  Delete</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: 600 }} align="left">  Update</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: "black" }}
                            >
                                <TableCell sx={{ color: "black" }} component="th" scope="row">
                                    {i + 1}
                                </TableCell>
                                <TableCell sx={{ color: "black" }} component="th" scope="row">
                                    {row.income}
                                </TableCell>
                                <TableCell sx={{ color: "black" }} align="left">{row.date}</TableCell>
                                <TableCell sx={{ color: "black" }} align="left">{row.email}</TableCell>

                                <TableCell onClick={() => handleDelete(row._id)} sx={{ color: "black" }} align="right"><button
                                    className="flex justify-center items-center gap-2 w-20 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                                >
                                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                                        <svg
                                            className="w-6 h-6"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                        Button
                                    </svg>
                                </button></TableCell>
                                <TableCell onClick={() => handleUpdateIncome(row._id)} sx={{ color: "black" }} align="right"><button className="Btn">Edit
                                    <svg className="svg" viewBox="0 0 512 512">
                                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                                </button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
