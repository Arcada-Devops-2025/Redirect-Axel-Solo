export const handler = async (event) => {
  // Twilio sends parameters either in queryStringParameters (GET) or body (POST)
  const params = event.queryStringParameters || {};
  const digits = params.Digits;
  let responseXml = '';

  switch (digits) {
    case '1':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Testing, Jukebox Bot</Say>
  <Redirect method="POST">http://jukebox-env.eba-vvgs5ded.eu-north-1.elasticbeanstalk.com/</Redirect>
</Response>`;
      break;
    case '2':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Testing, Trivia Bot</Say>
  <Redirect method="POST">https://devops-twiliobot-tasthu-1.onrender.com</Redirect>
</Response>`;
      break;
    case '3':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Testing, Dad Joke Bot</Say>
  <Redirect method="POST">https://lr9i3ac02k.execute-api.eu-north-1.amazonaws.com/voice</Redirect>
</Response>`;
      break;
    case '4':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Testing, BLANK Bot</Say>
  <Redirect method="POST"><!-- web adress goes here --></Redirect>
</Response>`;
      break;
    default:
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Joke dot Invalid number, try again.</Say>
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