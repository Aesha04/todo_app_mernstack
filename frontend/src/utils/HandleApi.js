import axios from 'axios';

const baseURL = "todo-app-mernstack-backend.vercel.app"
const getAllToDo = (setToDo) => {
    axios.get(baseURL)
    .then(({data}) =>{
        console.log('data : ',data);
        setToDo(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

const addToDo = (text, setText, setToDo) => {

    axios.post(`${baseURL}/save`,{text})
    .then((data) => {
        console.log(data)
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err));
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdate) => {

    axios.post(`${baseURL}/update`,{_id: toDoId,text})
    .then((data) => {
        console.log(data)
        setIsUpdate(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err));
}

const deleteToDo = (_id, setToDo) => {

    axios.post(`${baseURL}/delete`,{_id})
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err));
}

export {getAllToDo,addToDo,updateToDo,deleteToDo};
