export const handler = async (event) => {
  
  const params = event.queryStringParameters || {};
  const digits = params.Digits;
  let responseXml = '';

  switch (digits) {
    case '1':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET">http://testforexersise.s3-website.eu-north-1.amazonaws.com/mainCode/jokes.xml</Redirect>
</Response>`;
      break;
    case '2':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET">http://testforexersise.s3-website.eu-north-1.amazonaws.com/mainCode/Serious.xml</Redirect>
</Response>`;
      break;
    case '3':
      responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect method="GET">http://testforexersise.s3-website.eu-north-1.amazonaws.com/mainCode/exotic.xml</Redirect>
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