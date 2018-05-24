import axios from 'axios'
const token = "denemeolduguicinstatic";
const baseUrl = "localhost:6100/api";

export const GetMovies = () => {
	return axios.get(`${baseUrl}/movies`, {
		headers: {
			Authorization: token
		}
	});
};

export const GetSeries = () => {
	return axios.get(`${baseUrl}/series`, {
		headers: {
			Authorization: token
		}
	});
};