import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebase.init";

const useTodo=()=>{
    const [todos, setTodos] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {
        fetch(`https://todo-app-nayem55.vercel.app/todos?email=${email}`)
          .then((res) => res.json())
          .then((data) => setTodos(data));
      }, [email]);
    return [todos,setTodos]
}
export default useTodo;
