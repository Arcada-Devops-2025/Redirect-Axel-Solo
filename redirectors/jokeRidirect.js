export const handler = async (event) => {
  // Twilio sends parameters either in queryStringParameters (GET) or body (POST)
  const params = event.queryStringParameters || {};
  const digits = params.Digits;
  let responseXml = '';

  switch (digits) {
    case '1':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <say>end of test for now, goodbye</say>
  <Redirect method="GET"><!-- put link here--></Redirect>
</Response>`;
      break;
    case '2':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET"><!-- web adress goes here --></Redirect>
</Response>`;
      break;
    case '3':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET"><!-- web adress goes here --></Redirect>
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