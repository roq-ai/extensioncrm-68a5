import axios from 'axios';
import queryString from 'query-string';
import { OpportunityInterface, OpportunityGetQueryInterface } from 'interfaces/opportunity';
import { GetQueryInterface } from '../../interfaces';

export const getOpportunities = async (query?: OpportunityGetQueryInterface) => {
  const response = await axios.get(`/api/opportunities${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createOpportunity = async (opportunity: OpportunityInterface) => {
  const response = await axios.post('/api/opportunities', opportunity);
  return response.data;
};

export const updateOpportunityById = async (id: string, opportunity: OpportunityInterface) => {
  const response = await axios.put(`/api/opportunities/${id}`, opportunity);
  return response.data;
};

export const getOpportunityById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/opportunities/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOpportunityById = async (id: string) => {
  const response = await axios.delete(`/api/opportunities/${id}`);
  return response.data;
};
