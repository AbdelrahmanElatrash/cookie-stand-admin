import { useState } from "react";
import { useAuth } from "../contexts/auth";


export default function useResource() {

    const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
    const {tokens, logout} = useAuth();


    async function fetchResource(){
        
        if (!tokens) {
            return;
        }

        try {
            const response = await fetch(apiUrl,config())
            const responseJSON = await response.json()
            console.log(responseJSON)
            return responseJSON;
        }
        catch(err){
            handleError(err);
        }
    }


    async function createResource(standInfo){
        if (!tokens) {
            return;
        }

        try {
            const options = config()
            options.method = "POST"
            options.body = JSON.stringify(standInfo)
            await fetch(apiUrl,options)
            mutate(); //collect the data again
        }
        catch(err){
            handleError(err);
        }
    }


    function config(){
        return {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + tokens.access
            }
        }
    }


}