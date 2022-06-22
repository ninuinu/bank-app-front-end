import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:6060/",
});


export async function fetchAccounts(userId: number) {
    return api.get(`accounts?userId=${userId}`);
};

export async function fetchAccount(accountNumber: number) {
    return api.get(`account?accountNumber=${accountNumber}`);
};

export async function updateAccount(accountNumber: number, name: string) {
    return api.post(`accountName?accountNumber=${accountNumber}&accountName=${name}`);
};

export async function fetchTransactions(accountNumber: number) {
    return api.get(`transactions?accountNumber=${accountNumber}`);
};

export async function fetchTransaction(id: number) {
    return api.get(`transaction?id=${id}`);
};