const { Organizations } = require('aws-sdk');

const handler = async (event) => {
  const organizations = new Organizations({apiVersion: '2016-11-28'});
  try {

    if(event.AccountId) {
      const { AccountId } = event;
      await organizations.closeAccount({ AccountId }).promise();
      return 'success'
    }

    if(!Array.isArray(event.ids)){
      throw new Error(`you must pass a single object { AccountId: "123456789012" } or an array of  { ids: [ "123456789012", "123456789012" ]`);
    }

    const { ids } = event;
    const closeAccounts = ids.map(async AccountId => await organizations.closeAccount({ AccountId }).promise());
    await Promise.all(closeAccounts);

    return 'success';

  } catch(err) {  
    return err;
  }
};


module.exports = {
  handler
}
