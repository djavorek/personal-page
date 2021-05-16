const SparkPost = require('sparkpost');
const queryString = require('query-string');

const emailTemplate = require('./emailTemplate');

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
  const parsed = queryString.parse(event.body);

  const msg = escapeOutput(parsed.message);
  const from = escapeOutput(parsed.name);
  const contact = escapeOutput(parsed.contact);

  try {
    await client.transmissions.send({
      content: {
        from: 'kapcsolat@javorekdenes.hu',
        subject: `Közvetlen üzenet - ${from}`,
        html: emailTemplate.getEmailTemplate(from, contact, msg),
      },
      recipients: [{ address: 'javorek.denes@gmail.com' }]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({message: "Sent"})
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({message: "Failed to send."})
    }
  }
}

