##

AWS introduced API to [close the AWS Account](https://github.com/aws/aws-sdk-js/blob/master/CHANGELOG.md#211030). Unforthnatally, the API is not YET available on the Lambda environment. We have to install aws-sdk locally, package it and deploy with our code in order to work. 

`export AWS_PROFILE=default`
`sls deploy`

Pass "AccountId" as a string parameter to the function.

https://github.com/bind-almir/close-aws-account.git