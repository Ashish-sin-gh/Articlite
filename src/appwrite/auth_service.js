import envConfig from "../config/envConfig";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(projectID).setProject(projectURL);
    this.account = new Account(this.client);
  }

  async createAcc({ username, password, name }) {
    try {
      const userAcc = await this.account.create(
        ID.unique(),
        username,
        password,
        name
      );
      if (userAcc) {
        //if user acc exist then log in
        return this.loginUser({ email, password });
      } else {
        return userAcc;
      }
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getUserSession() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
