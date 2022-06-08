// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug55323.phpt
  it("Bug #55323 (SoapClient segmentation fault when XSD_TYPEKIND_EXTENSION contains itself)", function () {
    expect(parser.parseCode("<?php\nini_set(\"soap.wsdl_cache_enabled\",0);\n$timestamp = \"2011-07-30T03:25:00-05:00\";\n$wsdl = __DIR__.\"/bug55323.wsdl\";\nclass TestSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    return <<<EOF\n<SOAP-ENV:Envelope SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"http://test.com/soap/v3/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\">\n   <SOAP-ENV:Body>\n      <ns1:getObjectResponse>\n         <getObjectReturn xsi:type=\"ns1:Customer\" id=\"ref1\">\n            <accountId xsi:type=\"xsd:int\">1234</accountId>\n            <parent href=\"#ref1\"/>\n         </getObjectReturn>\n      </ns1:getObjectResponse>\n   </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n  }\n}\n$soapClient = new TestSoapClient($wsdl,\n        array('trace' => 1, 'exceptions' => 0));\n$result = $soapClient->getObject();\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
