import axios from 'axios'
const token = "denemeolduguicinstatic";
const baseUrl = "http://localhost:3100/api/v1";

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