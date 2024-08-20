import {Router} from 'express'
import { 
    createAffirmation, 
    deleteAffirmation, 
    getAffirmation, 
    getAllAffirmations, 
    updateAffirmation
} from '../controllers/affirm.controller.js';

const affirmRouter = Router();

affirmRouter.route('/')
    .get(getAllAffirmations)
    .post(createAffirmation);

affirmRouter.route('/:id')
    .get(getAffirmation)
    .put(updateAffirmation)
    .delete(deleteAffirmation);

// affirmRouter.get("/affirm", getAllAffirmations)
// affirmRouter.get("/affirm/:id", getAffirmation)
// affirmRouter.post("/affirm", createAffirmation)
// affirmRouter.put("/affirm/:id", updateAffirmation)
// affirmRouter.delete("/affirm/:id", deleteAffirmation)

export default affirmRouter;