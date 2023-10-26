import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addNewSpecimen } from "../servicces/ProgramService"

const SpecimenComponent = () => {
    const [marking, setMarking] = useState('')
    const [standard, setStandard] = useState('')
    const [protocol, setProtocol] = useState('')
    const [strength, setStrength] = useState('')
    const [module, setModule] = useState('')

    const { id } = useParams();
    const [errors, setErrors] = useState({
        marking: '',
        standard: '',
        protocol: ''
    })

    const navigator = useNavigate();

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors }

        if (marking.trim()) {
            errorsCopy.marking = '';
        } else {
            errorsCopy.marking = 'Маркировка образца отсутствует';
            valid = false;
        }

        if (standard.trim()) {
            errorsCopy.standard = '';
        } else {
            errorsCopy.standard = 'Не указан стандарт испытания';
            valid = false;
        }

        if (protocol.trim()) {
            errorsCopy.protocol = '';
        } else {
            errorsCopy.protocol = 'Не указан протокол испытания';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;

    }

    function pageTitle() {
        return <h2 className='text-center'>Добавить образец</h2>
        // if(id){
        //     return <h2 className='text-center'>Обновить данные по образцу</h2>
        // }else{
        //     return <h2 className='text-center'>Добавить образец</h2>
        // }
    }
    // function saverUpdateSpecimen() {

    // }
    function saveOrUpdateSpecimen(e) {
        e.preventDefault();

        if (validateForm()) {
            const specimen = { marking, standard, protocol, strength, module }
            console.log(specimen)

            // if(id){
            //     updateSpecimen(id, specimen).then((response) => {
            //         console.log(response.data);
            //         navigator('/');
            //     }).catch(error => {
            //         console.error(error);
            //     })
            // } else {
            //     addNewSpecimen(specimen).then((response) => {
            //         console.log(response.data);
            //         navigator('/')
            //     }).catch(error => {
            //         console.error(error);
            //     })
            // }
            addNewSpecimen(id, specimen).then((response) => {
                console.log(response.data);
                navigator('/specimens')
            }).catch(error => {
                console.error(error);
            })
        }
    }

    function goBack(){
        navigator('/specimens')
    }


    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Маркировка образца:</label>
                                <input
                                    type='text'
                                    placeholder='Укажите маркировку образца'
                                    name='маркировка'
                                    value={marking}
                                    className={`form-control ${errors.marking ? 'is-invalid' : ''}`}
                                    onChange={(e) => setMarking(e.target.value)}
                                >
                                </input>
                                {errors.marking && <div className='invalid-feedback'> {errors.marking} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Стандарт испытания:</label>
                                <input
                                    type='text'
                                    placeholder='Укажите стандарт испытания'
                                    name='стандарт испытания'
                                    value={standard}
                                    className={`form-control ${errors.standard ? 'is-invalid' : ''}`}
                                    onChange={(e) => setStandard(e.target.value)}
                                >
                                </input>
                                {errors.standard && <div className='invalid-feedback'> {errors.standard} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Протокол испытания:</label>
                                <input
                                    type='text'
                                    placeholder='Укажите протокол испытания'
                                    name='протокол испытания'
                                    value={protocol}
                                    className={`form-control ${errors.protocol ? 'is-invalid' : ''}`}
                                    onChange={(e) => setProtocol(e.target.value)}
                                >
                                </input>
                                {errors.protocol && <div className='invalid-feedback'> {errors.protocol} </div>}
                            </div>

                            <div className='form-group'>
                                <label>Прочность: </label>
                                <input
                                    type='text'
                                    placeholder='Прочность'
                                    name="strength"
                                    value={strength}
                                    className='form-control'
                                    onChange={(e) => setStrength(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Модуль: </label>
                                <input
                                    type='text'
                                    placeholder='Модуль'
                                    module="module"
                                    className='form-control'
                                    onChange={(e) => setModule(e.target.value)} />
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateSpecimen} >Подтвердить</button>
                            <button className='btn btn-danger' onClick={goBack}>Отмена</button>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default SpecimenComponent