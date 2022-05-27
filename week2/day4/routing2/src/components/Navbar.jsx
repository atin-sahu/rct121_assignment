import { Box, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const [state, dispatch] = useContext(AuthContext);
  return (
    <div>
      <Flex justifyContent='space-around' borderBottom='1px solid black'>
        <p>
          <Link to="/home">Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/users">Users</Link>
        </p>
        <Box>
        {state.isAuth ? (
          <Button
            colorScheme="red"
            onClick={() => {
              dispatch({type:"LOGOUT_SUCCESS"});
            }}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button colorScheme="green">Login</Button>
          </Link>
        )}
      </Box>
      </Flex>
    </div>
  );
};
