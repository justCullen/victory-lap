import api from './api-config'

export const getAllDestinations = async () => {
  const resp = await api.get('/destinations');
  return resp.data;
}

export const getOneDestination = async (id) => {
  const resp = await api.get(`/destinations/${id}`);
  return resp.data;
}

export const postDestination = async (destinationData) => {
  const resp = await api.post('/destinations', { destination: destinationData });
  return resp.data;
}

export const putDestination = async (id, destinationData) => {
  const resp = await api.put(`/destinations/${id}`, { destination: destinationData });
  return resp.data;
}

export const destroyDestination = async (id) => {
  const resp = await api.delete(`/destinations/${id}`);
  return resp;
}