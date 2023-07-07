import axios from 'axios';
import queryString from 'query-string';
import { CustomerSupportInterface, CustomerSupportGetQueryInterface } from 'interfaces/customer-support';
import { GetQueryInterface } from '../../interfaces';

export const getCustomerSupports = async (query?: CustomerSupportGetQueryInterface) => {
  const response = await axios.get(`/api/customer-supports${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCustomerSupport = async (customerSupport: CustomerSupportInterface) => {
  const response = await axios.post('/api/customer-supports', customerSupport);
  return response.data;
};

export const updateCustomerSupportById = async (id: string, customerSupport: CustomerSupportInterface) => {
  const response = await axios.put(`/api/customer-supports/${id}`, customerSupport);
  return response.data;
};

export const getCustomerSupportById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/customer-supports/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCustomerSupportById = async (id: string) => {
  const response = await axios.delete(`/api/customer-supports/${id}`);
  return response.data;
};
