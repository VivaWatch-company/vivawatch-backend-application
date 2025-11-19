import axios, { AxiosInstance } from 'axios';

export class StripeService {
  private api: AxiosInstance = axios.create({
    baseURL: '',
  });

  createPayment() {}
}
