// aws-config.js
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAVFMGTRDZZUXSSTKI',
  secretAccessKey: '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',
  region: 'us-east-1',
});

const s3 = new AWS.S3({ /* other options */ });
module.exports = s3;