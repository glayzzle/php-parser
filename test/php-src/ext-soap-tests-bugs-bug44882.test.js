// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug44882.phpt
  it("Bug #44882 (SOAP extension object decoding bug)", function () {
    expect(parser.parseCode("<?php\nclass TestSoapClient extends SoapClient\n{\n    public function __doRequest($req, $loc, $act, $ver, $one_way = 0): ?string\n    {\n        return <<<XML\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n  xmlns:ns=\"urn:ebay:api:PayPalAPI\">\n  <SOAP-ENV:Body id=\"_0\">\n    <GetExpressCheckoutDetailsResponse xmlns=\"urn:ebay:api:PayPalAPI\">\n      <Timestamp>2008-06-23T14:51:08Z</Timestamp>\n      <Ack>Success</Ack>\n      <CorrelationID>ae013a0ccdf13</CorrelationID>\n      <Version>50.000000</Version>\n      <Build>588340</Build>\n      <GetExpressCheckoutDetailsResponseDetails xsi:type=\"ns:GetExpressCheckoutDetailsResponseDetailsType\">\n        <Token>EC-11Y75137T2399952C</Token>\n        <PayerInfo>\n          <Payer>example@example.com</Payer>\n          <PayerID>MU82WA43YXM9C</PayerID>\n          <PayerStatus>verified</PayerStatus>\n        </PayerInfo>\n      </GetExpressCheckoutDetailsResponseDetails>\n    </GetExpressCheckoutDetailsResponse>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nXML;\n    }\n}\n$client = new TestSoapClient(__DIR__.'/bug44882.wsdl');\nprint_r($client->GetExpressCheckoutDetails());\n?>")).toMatchSnapshot();
  });
});
