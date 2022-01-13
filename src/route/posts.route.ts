import {Router} from 'express';
import {postsController} from '../controller';

const router = Router();

router.get('/', postsController.getPosts);
router.get('/:id', postsController.getSinglePost);

export default router;
