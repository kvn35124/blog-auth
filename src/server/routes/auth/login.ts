import { Router } from 'express';
import * as passport from 'passport';
import { createToken } from '../../utilities/security/tokens';



const router = Router();

router.post('/', passport.authenticate('local'), async (req: any, res) => {
    let token = await createToken({ userid: req.user.id });
    res.json(token)
});


export default router;