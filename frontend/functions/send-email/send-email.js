import getEmailTemplate from './emailTemplate';

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

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body).payload;

  const msg = escapeOutput(body.data.message);
  const from = escapeOutput(body.data.name);
  const contact = escapeOutput(body.data.contact);

  try {
    await client.transmissions.send({
      content: {
        from: 'kapcsolat@javorekdenes.hu',
        subject: `Közvetlen üzenet - ${from}`,
        html: getEmailTemplate(from, contact, msg),
      },
      recipients: [{ address: 'javorek.denes@gmail.com' }]
    });

    return true;
  } catch (e) {
    console.warn('Email could not be sent: ', e)
    return false;
  }
}

