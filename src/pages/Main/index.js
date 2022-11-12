import React, {useState, useCallback} from "react";
import {FaGithub, FaPlus} from 'react-icons/fa';
import { Container, Form, SubmitButton } from "./styles";
import api from '../../services/api';

export default function Main(){

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState('');
    
    const handleSubmit = useCallback((e)=>{
        //Prevents page from reloading on form submition
        e.preventDefault();

        async function submit() {
            const response = await api.get(`repos/${newRepo}`)
            const data = {
                name: response.data.full_name,
            }
    
            // [...repositorios] concats all the already existent data
            // in 'repositorios' and concat to the new one(s)
            setRepositorios([...repositorios, data]);
            setNewRepo('');
        }

        submit();

        //When newRepo or Repositorios is updated
        // The async useCallBack is called
    }, [newRepo, repositorios]);

    function handleInputChange(e) {
        setNewRepo(e.target.value)
    }

    return (
        <Container>
            <h1>
                <FaGithub size={25}/>
                Repositorios
            </h1>
            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="Adicionar Repositorio" value={newRepo} onChange={handleInputChange}/>
                <SubmitButton>
                    <FaPlus color="#fff" size={14}/>
                </SubmitButton>
            </Form>
        </Container>
    )
}