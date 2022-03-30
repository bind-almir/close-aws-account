const { Organizations } = require('aws-sdk');
const handler = async (event) => {
  const organizations = new Organizations({apiVersion: '2016-11-28'});
  try {
    const { AccountId } = event;
    const params = {
      AccountId
    };
    await organizations.closeAccount(params).promise();
    return 'success';
  } catch(err) {
    console.log(err);
    return 'failed';
  }
};


module.exports = {
  handler
}
