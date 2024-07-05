import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService { //Exporting the AuthService class allows other modules to create new instances of the AuthService class if they need to.
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // Create an account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // Check if logged in or not
  async getCurrentUser() {
    try {
      const currentUser = await this.account.get();
      return currentUser;
      // if (currentUser) return currentUser;
      // else return this.login();
    } catch (error) {
      console.log(`Appwrite Service :: getCurrentUser :: error `, error);
    }
    return null;
  }

  // Logged out
  async logout(){
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(`Appwrite Service :: logout :: error `, error);
    }
  }
}

const authService = new AuthService();
export default authService;
