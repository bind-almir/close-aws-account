const { Organizations } = require('aws-sdk');
const handler = async (event) => {
  const organizations = new Organizations({apiVersion: '2016-11-28'});
  try {
    const { AccountId } = event;
    const params = {
      AccountId
    };
    const result = await organizations.closeAccount(params).promise();
    return result;
  } catch(err) {
    console.log(err);
    return false;
  }
};


module.exports = {
  handler
}
