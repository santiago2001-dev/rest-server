const {Router} = require('express');
const res = require('express/lib/response');
const router = Router();
const {getUser }= require('../controllers/user')
const {putUser }= require('../controllers/user')
const {posttUser }= require('../controllers/user')
const {deletetUser }= require('../controllers/user')
const {pathUser }= require('../controllers/user')


router.get('/',getUser)


router.put('/',putUser)

router.post('/',posttUser)

router.delete('/',deletetUser)


router.patch('/',pathUser)


module.exports = router;