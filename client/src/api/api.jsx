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

export const getUsersDetails = async () => {
    console.log("first")
    try {
       const getUsersDetails = await instance({
        url:"/get-users-details",
        method:"GET",
       }) 
       return getUsersDetails.data
    } catch (error) {
        console.log(error)
    }
}