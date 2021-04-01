import api from './api-config'

export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}

export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
}

export const postComment = async (commentData) => {
  const resp = await api.post('/comments', { comment: commentData });
  return resp.data;
}
