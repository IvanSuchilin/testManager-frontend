import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { deleteProgram, listPrograms } from '../servicces/ProgramService';

const ListProgramComponent = () => {

    const [programs, setPrograms] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllPrograms();
    }, [])

    // useEffect(() => {
    //     axios.get("http://localhost:8080/specimens")
    //     .then((response) => setSpecimens(response.data));
    // }, [])

    function getAllPrograms() {
        listPrograms().then((response) => {
            setPrograms(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function addNewSpecimen(id) {
        //navigator('/program/' + id + '/' + 'add-specimen')
        navigator(`/program/${id}/add-specimen`)
        // console.log(id)
    }

    function addNewProgram() {
navigator('/add-program')
    }

    function updateProgram(id) {
        navigator(`/edit-program/${id}`)
    }

    function switchToSpecimens() {
        navigator(`/specimens`)
    }

    function removeProgram(id) {
        console.log(id);

        deleteProgram(id).then((response) => {
            getAllPrograms();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>

            <h2 className='text-center'>Список программ испытаний</h2>
            <div style={{ display: 'flex' }}>
                <button className="btn btn-warning" onClick={addNewProgram} style={{
                    width: "200px",
                    height: "50px",
                }}>Добавить программу</button>
                <button className='btn btn-primary mb-2' onClick={() => switchToSpecimens()} style={{
                    width: "150px",
                    height: "50px",
                }}>Все образцы</button>
            </div>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Номер программы испытания</th>
                        <th>Описание программы</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        programs.map(program =>
                            <tr key={program.id}>
                                <td>{program.number}</td>
                                <td>{program.annotation}</td>
                                <td>
                                    <div style={{ display: 'flex' }}>
                                        <button className='btn btn-info' onClick={() => updateProgram(program.id)} style={{
                                            width: "100px",
                                            height: "50px",
                                        }}>Изменить</button>
                                        <button className='btn btn-primary mb-2' onClick={() => addNewSpecimen(program.id)} style={{
                                            width: "170px",
                                            height: "50px",
                                        }}>Добавить образец</button>
                                        <button className='btn btn-danger' onClick={() => removeProgram(program.id)}
                                            style={{
                                                width: "100px",
                                                height: "50px",
                                            }}
                                        >Удалить</button>
                                    </div>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProgramComponent