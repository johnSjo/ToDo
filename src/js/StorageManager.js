/**
 * Created by john.sjostrom on 2016-07-08.
 */
import JsonData from "../assets/data/data.json"

export default class StorageManager {
    constructor(){
        this.supportLocalStorage = (typeof(Storage) !== "undefined");
    }

    getData(){
        if(!this.data){
            this.setUpInitData();
        }

        return this.data;
    }

    setData(obj){
        if (this.supportLocalStorage){
            localStorage.setItem("taskmaster5000", JSON.stringify(obj));
        }
    }

    setUpInitData(){

        if (this.supportLocalStorage){
            let storedData = localStorage.getItem("taskmaster5000");

            if (storedData){
                this.data = JSON.parse((storedData));
                return;
            }
        }

        // if we don't support local storage and/or if we don't have any stored data
        // use the local json file
        this.data = JsonData;
    }
}