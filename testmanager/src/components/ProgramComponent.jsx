import { useNavigate } from "react-router-dom";
import { addNewProgram } from "../servicces/ProgramService";
import { useState } from "react";

const ProgramComponent = () => {
    const [number, setNumber] = useState('')
    const [annotation, setAnnotation] = useState('')
    //    const {id} = useParams();
    const [errors, setErrors] = useState({
        number: '',
        annotation: ''
    })

    const navigator = useNavigate();

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors }
        if (number.trim()) {
            errorsCopy.number = '';
        } else {
            errorsCopy.number = 'Не указан номер программы';
            valid = false;
        }
        if (annotation.trim()) {
            errorsCopy.standard = '';
        } else {
            errorsCopy.annotation = 'Не указано описание программы';
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    }

    function saveProgram(e) {
        e.preventDefault();
        if (validateForm()) {
            const program = { number, annotation }
            console.log(program)
            addNewProgram(program).then((response) => {
                console.log(response.data);
                navigator('/program')
            }).catch(error => {
                console.error(error);
            })
        }
    }

    function goBack(){
        navigator('/program')
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        <h2 className='text-center'>Добавление программы</h2>
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Номер программы испытаний:</label>
                                <input
                                    type='text'
                                    placeholder='Укажите номер программы испытаний'
                                    name='номер №'
                                    value={number}
                                    className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                                    onChange={(e) => setNumber(e.target.value)}
                                >
                                </input>
                                {errors.number && <div className='invalid-feedback'> {errors.number} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Название программы испытаний:</label>
                                <input
                                    type='text'
                                    placeholder='Укажите название программы'
                                    name='название программы'
                                    value={annotation}
                                    className={`form-control ${errors.annotation ? 'is-invalid' : ''}`}
                                    onChange={(e) => setAnnotation(e.target.value)}
                                >
                                </input>
                                {errors.annotation && <div className='invalid-feedback'> {errors.annotation} </div>}
                            </div>

                            <button className='btn btn-success' onClick={saveProgram} >Подтвердить</button>
                            <button className='btn btn-danger' onClick={goBack}>Отмена</button>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default ProgramComponent