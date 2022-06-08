// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug36908.phpt
  it("Bug #36908 (wsdl default value overrides value in soap request)", function () {
    expect(parser.parseCode("<?php\nclass PublisherService {\n  function add($publisher) {\n    return $publisher->region_id;\n  }\n}\n$input =\n'<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<soapenv:Envelope\nxmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <soapenv:Body>\n    <ns1:add xmlns:ns1=\"urn:PublisherService\" soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\">\n      <publisher href=\"#id0\"/>\n    </ns1:add>\n    <multiRef xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\"\nxmlns:ns3=\"http://soap.dev/soap/types\" id=\"id0\" soapenc:root=\"0\"\nsoapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\nxsi:type=\"ns3:publisher\">\n      <region_id href=\"#id5\"/>\n    </multiRef>\n    <multiRef xmlns:ns5=\"http://soap.dev/soap/types\"\nxmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\" id=\"id5\"\nsoapenc:root=\"0\"\nsoapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\nxsi:type=\"xsd:long\">9</multiRef>\n  </soapenv:Body>\n</soapenv:Envelope>';\nini_set('soap.wsdl_cache_enabled', false);\n$server = new SoapServer(__DIR__.\"/bug36908.wsdl\");\n$server->setClass(\"PublisherService\");\n$server->handle($input);\n?>")).toMatchSnapshot();
  });
});
