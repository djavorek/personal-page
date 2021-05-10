const SparkPost = require('sparkpost');

const options = {
  endpoint: 'https://api.eu.sparkpost.com:443',
}

const client = new SparkPost(process.env.SPARKPOST, options);

function escapeOutput(toOutput){
  return toOutput.replace(/\&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#x27')
      .replace(/\//g, '&#x2F');
}

exports.handler = function(event, context, callback) {
  const msg = escapeOutput(event.data.message);
  const from = escapeOutput(event.data.name);
  const contact = escapeOutput(event.data.contact);

  client.transmissions.send({
    content: {
      from: 'kapcsolat@javorekdenes.hu',
      subject: `Instant üzenet - ${from} - ${contact}`,
      html:
        `<html><body><p>${msg}</p></body></html>`
    },
    recipients: [{ address: 'javorek.denes@gmail.com' }]
  }).then(() => {
    console.log('Email sent')
  }).catch((e) => {
    console.warn('Email could not be sent: ', e)
  });
}

