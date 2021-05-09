const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST);

exports.handler = function(event, context, callback) {
  client.transmissions
    .send({
      content: {
        from: 'kapcsolat@javorekdenes.hu',
        subject: 'Test subject',
        html:
          "<html><body><p>My test email.</p></body></html>"
      },
    recipients: [{ address: 'javorek.denes@gmail.com' }]
  });
}