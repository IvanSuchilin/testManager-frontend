import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { deleteSpecimen, listSpecimens } from '../servicces/SpecimenService';

const ListSpecimenComponent = () => {

    const [specimens, setSpecimens] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllSpecimens();
    }, [])

    // useEffect(() => {
    //     axios.get("http://localhost:8080/specimens")
    //     .then((response) => setSpecimens(response.data));
    // }, [])

    function getAllSpecimens() {
        listSpecimens().then((response) => {
            setSpecimens(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function switchToPrograms() {
        navigator(`/program`,)
    }
    // function addNewSpecimen(){
    //     navigator('/add-specimen')
    // }

    function updateSpecimen(id) {
        navigator(`/edit-specimen/${id}`)
    }

    function removeSpecimen(id) {
        console.log(id);

        deleteSpecimen(id).then((response) => {
            getAllSpecimens();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>

            <h2 className='text-center'>Список образцов</h2>
            {/* <button className='btn btn-primary mb-2' onClick={addNewSpecimen}>Добавить образец</button> */}
            <button className='btn btn-primary mb-2' onClick={() => switchToPrograms()}>Все программы</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        {/* <th>id</th> */}
                        <th>Программа испытаний</th>
                        <th>Маркировка образца</th>
                        <th>Стандарт испытания</th>
                        <th>Номер протокола испытания</th>
                        <th>Значение напряжения</th>
                        <th>Значение модуля</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        specimens.map(specimen =>
                            <tr key={specimen.id}>
                                {/* <td>{specimen.id}</td> */}
                                <td>{specimen.program}</td>
                                <td>{specimen.marking}</td>
                                <td>{specimen.standard}</td>
                                <td>{specimen.protocol}</td>
                                <td>{specimen.strength}</td>
                                <td>{specimen.module}</td>
                                <td>
                                    <div style={{ display: 'flex' }}>
                                        <button className='btn btn-info' onClick={() => updateSpecimen(specimen.id)} style={{
                                            width: "100px",
                                            height: "50px",
                                        }}>Изменить</button>
                                        <button className='btn btn-danger' onClick={() => removeSpecimen(specimen.id)}
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

export default ListSpecimenComponent