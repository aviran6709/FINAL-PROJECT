const router = require('express').Router();
const { getUserInfo, createUsers } = require('../controllers/users');

router.get('/me', getUserInfo);
router.get('/me', createUsers);

module.exports = router;
