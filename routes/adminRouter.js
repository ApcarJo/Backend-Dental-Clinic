const router = require('express').Router();
const adminController = require('../controllers/adminController');
const admin = require('../middleware/admin');

// GET - Returns all clinics

router.get('/', async(req, res) => {
    try {
        res.json(await adminController.findAllAdmins())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// POST - Creates a new clinic

router.post('/', admin, async(req, res) => {
    try {
        const body = req.body;
        res.json(await adminController.createAdmin(body))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// PUT - Updates the information about a clinic 

router.put('/', admin, async (req,res) => {
    try{
        const body = req.body;
        res.json(await adminController.updateAdmin(body)); 
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// DELETE - Deletes a clinic
router.delete('/', admin, async (req, res) => {
    try {
        const body = req.body;
        res.json(await adminController.deleteAdmin(body))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


module.exports = router;

