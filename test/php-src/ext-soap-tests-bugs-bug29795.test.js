// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug29795.phpt
  it("Bug #29795 (SegFault with Soap and Amazon's Web Services)", function () {
    expect(parser.parseCode("<?php\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    return <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?><SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\nxmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><SOAP-ENV:Body><Price><Amount>3995</Amount><CurrencyCode>USD</CurrencyCode></Price></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\n  }\n}\n$client = new LocalSoapClient(__DIR__.\"/bug29795.wsdl\",array(\"trace\"=>1));\n$ar=$client->GetPrice();\necho \"o\";\n$client = new LocalSoapClient(__DIR__.\"/bug29795.wsdl\",array(\"trace\"=>1));\n$ar=$client->GetPrice();\necho \"k\\n\";\n?>")).toMatchSnapshot();
  });
});
