import {Query} from '../index';


const insert = (userid: number) => Query(`insert into accesstokens (userid) value (?)`, [userid]);
const update = (id: number, token: string) => Query(`update accesstokens set token ? where id = ?`, [token, id])

export default {
    insert,
    update
}