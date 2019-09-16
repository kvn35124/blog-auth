import {Query} from '../index';

const findByEmail = (email: string) => Query(`select * from authors where email = ?`, [email]);


export default {
    findByEmail
}