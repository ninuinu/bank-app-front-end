import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:6060/",
});


export async function fetchAccounts(userId: number){
    return api.get(`accounts?userId=${userId}`);
};

export async function fetchTransactions(accountId:number){
    return api.get(`transactions?accountId=${accountId}`);
};