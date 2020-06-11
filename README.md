<h1 align="center">
    <img  alt="serverless start"  src="https://github.com/pimp-my-book/serverless-graphql-nodejs-starter/blob/master/serverless-starter.png">
 </h1>

# Serverless GraphQL NodeJS Starter ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

This is a basic boilerplate to kitstart your Serverless GraphQL projects with AWS Lambda. There is also a [TypeScript version](https://github.com/AmoDinho/serverless-graphql-typescript-starter/blob/master/README.md) if you prefer!

It is powered by [`Apollo-Server-Lambda`](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda) and uses the [Serverless Framework](https://serverless.com/) to deploy it to AWS.

This is hugely inspired by the starter that [Anomaly Innovations](https://github.com/AnomalyInnovations/serverless-nodejs-starter) created. The project was cloned from it.

## Prerequistes

- [An AWS Account](https://aws.amazon.com/)
- [A configured AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- [Serverless Framework installed on your machine](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [NodeJS](nodejs.org)

Note this project uses [Yarn](https://yarnpkg.com).

## How to get started

First clone the repo:

```
$ serverless install --url https://github.com/pimp-my-book/serverless-graphql-nodejs-starter --name project-name
```

Move into the project folder:

```
$ cd project-name
```

Then Install all its dependancies:

```
$ yarn install
```

Then you should be able to invoke the Lambda locally:

```
$ yarn offline
```

To deploy to AWS run the following command:

```
$ yarn deploy
```

This should be a good start to be able to move on and do whatever you gotta do meet business requirements.

### How To Link Other AWS Services

There are also Cloudformation templates for DynamoDB,S3,Cognito and SQS.

## Contributing

Contributions are most welcome!!

## License

MIT
