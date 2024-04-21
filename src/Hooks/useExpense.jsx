import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useExpense = () => {
    const { user } = useContext(AuthContext);
    
    const { refetch: reloadx, data: expense = []}= useQuery({
        queryKey: ['expense'],
        queryFn: async()=>{
            const res = await axios.get(`http://localhost:5000/getExpense/${user.email}`);
            return res.data
        }
    })

    return [expense, reloadx]
};

export default useExpense;