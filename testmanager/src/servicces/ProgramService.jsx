import axios from "axios";

const BASE_URL = "http://localhost:8080/program";


export const listPrograms = () => axios.get(BASE_URL);
export const deleteProgram = (programId) => axios.delete(BASE_URL + '/' + programId)
export const addNewSpecimen = (programId, specimen) => axios.post(BASE_URL + '/' + programId + '/specimens', specimen)
export const addNewProgram = (program) => axios.post(BASE_URL, program)
export const updateProgram = (programId, program) => axios.patch(BASE_URL + '/' + programId, program)