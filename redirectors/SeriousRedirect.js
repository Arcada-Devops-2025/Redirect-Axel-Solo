export const handler = async (event) => {
  // Twilio sends parameters either in queryStringParameters (GET) or body (POST)
  const params = event.queryStringParameters || {};
  const digits = params.Digits;
  let responseXml = '';

  switch (digits) {
    case '1':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET">https://6kk5wvtwaiddg6tnwiqdo5njsm0peydx.lambda-url.eu-north-1.on.aws/</Redirect>
</Response>`;
      break;
    case '2':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://2nuxjt6m2a.execute-api.eu-north-1.amazonaws.com/twilio</Redirect>
</Response>`;
      break;
    case '3':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://devops-twilio-voicebot.onrender.com/webhook</Redirect>
</Response>`;
      break;
    case '4':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET">http://ec2-13-60-40-185.eu-north-1.compute.amazonaws.com/</Redirect>
</Response>`;
      break;
    case '5':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://yverqcsiuvj3vqgtedkwnpaqum0hqnqd.lambda-url.eu-north-1.on.aws/voice</Redirect>
</Response>`;
      break;
    case '6':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET">https://dev-ops-projekt-arcada-devops.2.rahtiapp.fi/bot</Redirect>
</Response>`;
      break;
    case '7':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">http://ec2-13-62-103-150.eu-north-1.compute.amazonaws.com</Redirect>
</Response>`;
      break;
    case '8':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">http://ec2-3-85-143-252.compute-1.amazonaws.com/voicecall</Redirect>
</Response>`;
      break;
    case '9':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="POST">https://tlcd6qc2djxftr4aiwuf4hjqvy0bnwhh.lambda-url.us-east-1.on.aws/</Redirect>
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