// api-routes.js
// Initialize express router and cache
const router = require("express").Router();

// Set default API response
router.get("/", function (req, res) {
  res.status(404).end();
});
const { validateSignature } = require("./middlewares/validators/signature.js");
const { validateAccount } = require("./middlewares/validators/account.js");

// preregistration routes
const preregistrationController = require("./controllers/preregistrationController");
router.route("/preregistration").post(preregistrationController.add);
router
  .route("/preregistration/id/:id/account/:account")
  .put(validateSignature, validateAccount, preregistrationController.update);

router
    .route("/preregistration/claimbeta/:account")
    .put(validateSignature, validateAccount, preregistrationController.claimbeta);

router
    .route("/preregistration/share2earn/:account")
    .get(validateAccount, preregistrationController.getShare2earn);

// Account routes
const accountController = require("./controllers/accountController");
router.route("/account/v1/:account/nonce").get(accountController.getNonce);

// Export API routes
module.exports = router;
