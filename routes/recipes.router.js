import { Router } from "express";

const router = Router();

router.post('/', (req, res) =>{
    res.send('Add recipes');
});
router.get('/', (req, res) =>{
    res.send('Get all recipes');
});
router.get('/:id', (req, res) =>{
    res.send('Get all recipe with id');
});
router.patch('/', (req, res) =>{
    res.send('Update recipes with id');
});
router.delete('/', (req, res) => {
    res.send('delete recipes by id');
});

//Export router
export default router;