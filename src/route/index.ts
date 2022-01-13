import {Router} from 'express';
import postsRoute from './posts.route';

const router = Router();

router.use('/posts', postsRoute);

export default router;
