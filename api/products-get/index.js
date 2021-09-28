const data = require('../shared/product-data');
//
// reference: https://docs.microsoft.com/en-us/learn/modules/publish-static-web-app-api-preview-url/
// stuck on published staging branch build
module.exports = async function (context, req) {
  try {
    const junk = 1;
    const products = data.getProducts();
    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};