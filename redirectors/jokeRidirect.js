export const handler = async (event) => {
  // Twilio sends parameters either in queryStringParameters (GET) or body (POST)
  const params = event.queryStringParameters || {};
  const digits = params.Digits;
  let responseXml = '';

  switch (digits) {
    case '1':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET">https://siljands-fun-fact-bot-fun-fact-bot.2.rahtiapp.fi/voice</Redirect>
</Response>`;
      break;
    case '2':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">http://jukebox-env.eba-vvgs5ded.eu-north-1.elasticbeanstalk.com/voice</Redirect>
</Response>`;
      break;
    case '3':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://devops-twiliobot-tasthu-1.onrender.com</Redirect>
</Response>`;
      break;
    case '4':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://lr9i3ac02k.execute-api.eu-north-1.amazonaws.com/voice</Redirect>
</Response>`;
      break;
    case '5':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://devops-mily.onrender.com/</Redirect>
</Response>`;
      break;
    case '6':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://twiliovoicebot-xak5.onrender.com/voice</Redirect>
</Response>`;
      break;
    case '7':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET">https://rehnstbucket.s3.eu-north-1.amazonaws.com/index.xml</Redirect>
</Response>`;
      break;
    case '8':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://chickenbot-bm1l.onrender.com/voice</Redirect>
</Response>`;
      break;
    case '9':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://twilio-app-git-trillio-twillio.2.rahtiapp.fi/voice</Redirect>
</Response>`;
      break;
    default:
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Invalid number, try again.</Say>
  <Redirect method="GET">http://testforexersise.s3-website.eu-north-1.amazonaws.com/mainCode/menu.xml</Redirect>
</Response>`;
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
    body: responseXml,
  };
};