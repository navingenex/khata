const express = require("express");
const router = express.Router();

// const userRoute=require('../routes/user/user.routes');
// const authRoute=require('../routes/auth/auth.routes');
// const shopRoute=require('../routes/shop/shop.routes');
// const itemRoute=require('../routes/item/item.controller');

router.use('/user',require('../routes/user/user.routes'));
router.use('/auth',require('../routes/auth/auth.routes'));
router.use('/shop',require('../routes/shop/shop.routes'));
router.use('/bill',require('../routes/bill/bill.routes'));
module.exports = router;
