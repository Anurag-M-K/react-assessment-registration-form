import instance from "../axiosInstance/axiosInstance";

export const  addUserDetails = async (userData) =>{
    try {
        const addUserDetails = await instance({
            url:"/register",
            method:"POST",
            data:userData
        })
        return addUserDetails.data
    } catch (error) {
        console.log(error)
    }
}