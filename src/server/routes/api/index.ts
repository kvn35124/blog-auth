import { Router } from 'express';
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import tagRouter from './tags';
import { hashPassword } from '../../utilities/security/passwords';


const router = Router();


router.use('/blogs', blogsRouter);
router.use('/blogtags', blogtagsRouter);
router.use('/tags', tagRouter);


router.get('/test', async (req, res) => {
    res.json(hashPassword('password'));
})

export default router;