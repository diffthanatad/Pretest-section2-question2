import axios from "axios";
import { AxiosInstance } from "axios";
import { Injectable } from "@angular/core";

const URL = 'https://api.publicapis.org/categories';

@Injectable({
	providedIn: "root"
})

export class HttpClient {

	private httpClient: AxiosInstance;

	constructor() {
        this.httpClient = axios.create({
            timeout: 10000, /* 10 seconds before timeout */
            headers: {
                "Content-Type": "application/json",
            }
        });
	}

    public async getCategory() {
        try {
            var response = await this.httpClient.get(URL);
            return response.data.categories;
        } catch(error) {
            console.log("Error:", error);
        }
    }
}

