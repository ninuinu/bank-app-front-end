import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:6060/",
});


export async function fetchAccounts(userId: number){
    return api.get(`accounts?userId=${userId}`);
};

export async function fetchAccount(accountNumber: number){
    return api.get(`account?accountNumber=${accountNumber}`);
};

export async function fetchTransactions(accountNumber:number){
    return api.get(`transactions?accountNumber=${accountNumber}`);
};