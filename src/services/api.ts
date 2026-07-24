import axios, { AxiosInstance } from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.api.interceptors.request.use(async (config) => {
      try {
        const token = await SecureStore.getItemAsync('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Error getting auth token:', error);
      }
      return config;
    });
  }

  async login(username: string, password: string) {
    const response = await this.api.post('/auth/login', { username, password });
    if (response.data.token) {
      await SecureStore.setItemAsync('auth_token', response.data.token);
    }
    return response.data;
  }

  async register(username: string, password: string) {
    const response = await this.api.post('/auth/register', { username, password });
    if (response.data.token) {
      await SecureStore.setItemAsync('auth_token', response.data.token);
    }
    return response.data;
  }

  async logout() {
    await SecureStore.deleteItemAsync('auth_token');
  }

  async getPlayer() {
    return (await this.api.get('/player')).data;
  }

  async getCharacters() {
    return (await this.api.get('/characters')).data;
  }

  async findBattle(characterId: string) {
    return (await this.api.post('/battles/matchmake', { characterId })).data;
  }

  async getLeaderboard(limit: number = 50) {
    return (await this.api.get('/leaderboard', { params: { limit } })).data;
  }
}

export const apiService = new ApiService();
