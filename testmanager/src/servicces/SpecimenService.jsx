import axios from "axios";

const BASE_URL = "http://localhost:8080/specimens";


export const listSpecimens = () => axios.get(BASE_URL);
export const deleteSpecimen = (specimenId) => axios.delete(BASE_URL + '/' + specimenId);
export const updateSpecimen = (specimenId, specimenDto) => axios.patch(BASE_URL + '/' + specimenId, specimenDto)