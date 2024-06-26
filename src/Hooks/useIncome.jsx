import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useIncome = () => {

    const { user } = useContext(AuthContext);
    
    const { refetch: reload, data: income = []}= useQuery({
        queryKey: ['income'],
        queryFn: async()=>{
            const res = await axios.get(`https://money-tracker-server-three.vercel.app/getIncome/${user.email}`);
            return res.data
        }
    })

    return [income, reload]
};

export default useIncome;