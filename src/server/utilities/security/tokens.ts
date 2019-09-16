import * as jwt from 'jsonwebtoken';
import db from '../../db';
import * as crypto from 'crypto';
import config from '../../config';




interface IPayload {
    userid: number;
    tokenid?: number;
    unique?: string;
}


export const createToken = async (payload: IPayload) => {
    let {insertId}: any = await db.tokens.insert(payload.userid);
    payload.tokenid = insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    await db.tokens.update(payload.tokenid, token);
    return token;
}