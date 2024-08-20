import { pool } from "../config/mysql.config.js";
import QUERY from "../config/user.query.js";
import Httpstatus from '../utils/http.status.js'
import Response from "../utils/response.js";


export const getAllAffirmations = async (req, res) => {
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY.SELECT_USERS)
        if(!result){
            console.log('No result')
            res.status(Httpstatus.OK.code)
            .send(new Response(Httpstatus.OK.code, Httpstatus.OK.status, 'No result'))
        }else{
            console.log('Result')
            res.status(Httpstatus.OK.code)
            .send(new Response(Httpstatus.OK.code, Httpstatus.OK.status, 'Result Retrieved', result[0]))
        }
    } catch (error) {
        console.log('Error occured', error)
        throw error
    }
}

export const getAffirmation = async (req, res) => {
    return res.send('Single Affirmation');
}

export const createAffirmation = async (req, res) =>{
    const body = req.body
    try {
        console.log(body)
        const client = await pool.getConnection();
        const result = await client.query(QUERY.CREATE_USER, Object.values(body))
        res.status(Httpstatus.CREATED.code)
            .send(new Response(Httpstatus.CREATED.code, Httpstatus.CREATED.status, 'User Created', result))
    } catch (error) {
        console.log('Error occured', error)
        res.status(Httpstatus.BAD_REQUEST.code)
            .send(new Response(Httpstatus.BAD_REQUEST.code, Httpstatus.BAD_REQUEST.status, 'Error Occured'))
    }
}

export const updateAffirmation = async (req, res) =>{
    return res.send('Update Affirmation');
}

export const deleteAffirmation = async (req, res) =>{
    return res.send('Delete Affirmation');
}