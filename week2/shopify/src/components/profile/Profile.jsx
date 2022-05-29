import { Box,Button } from "@chakra-ui/react"

export const Profile = ()=>{

    return (
        <Box>
            <Button bg='red' onClick={()=>{dispatch({type:"LOGOUT_SUCCESS", token:null})}}>Logout</Button>
        </Box>
    )
}