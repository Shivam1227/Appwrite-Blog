import conf from '../conf/conf.js'
import {Client, Account, ID} from "appwrite"

export class AuthService{

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }
    
    // sign up 
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call anoter method
                // Automatically log in after sign up
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    // log in
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // get Current user
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        
        return null;
    }

    // Log out
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error)
        }
    }

}

const authService = new AuthService()          //making object of this AuthService call, so that we can directly use the services like login logout and all just bu this object.login/logout

export default authService



