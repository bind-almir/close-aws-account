##

AWS introduced API to [close the AWS Account](https://github.com/aws/aws-sdk-js/blob/master/CHANGELOG.md#211030). Unfortunately, the API is not YET available in the Lambda environment. We have to install aws-sdk locally, package it and deploy it with our code in order to work.

- `export AWS_PROFILE=default`
- `sls deploy`

Pass "AccountId" as a string parameter to the function.
