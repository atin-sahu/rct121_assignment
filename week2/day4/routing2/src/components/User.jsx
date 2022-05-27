import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Error } from "./Error";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import  {Navigate} from "react-router"

export const User = () => {
    const [state] = useContext(AuthContext);

  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [errorstate, setErrorstate] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await axios
        .get(`https://reqres.in/api/users/${params.id}`)
        .then((data) => data.data.data);
      console.log(data);
      setLoading(false);
      setUser(data);
    } catch (error) {
      setLoading(false);
      setErrorstate(true);
      setError(error);
    }
  };

  return (
    <div>
      {state.isAuth ? (
        <div>
          {errorstate ? (
            <Error error={error}></Error>
          ) : (
            <div>
              {loading && <p>.....Loding</p>}
              <img src={user.avatar}></img>
              <p>
                Name : {user.first_name} {user.last_name}{" "}
              </p>
            </div>
          )}
        </div>
      ) : (
        <Navigate to='/login'></Navigate>
      )}
    </div>
  );
};
