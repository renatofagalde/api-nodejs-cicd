import {Router} from "express";

export const router= Router()

router.get('/',(request,response)=>{
    response.send('API com express via deploy com o Dan')
})