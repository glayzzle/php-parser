// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/classmap002.phpt
  it("SOAP Classmap 2: SoapClient support for classmap", function () {
    expect(parser.parseCode("<?php\nclass TestSoapClient extends SoapClient{\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n        return <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"http://schemas.nothing.com\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><SOAP-ENV:Body>\n<ns1:dotest2Response><res xsi:type=\"ns1:book\">\n  <a xsi:type=\"xsd:string\">Blaat</a>\n  <b xsi:type=\"xsd:string\">aap</b>\n</res>\n</ns1:dotest2Response></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\n    }\n}\nclass book{\n    public $a=\"a\";\n    public $b=\"c\";\n}\n$options=Array(\n        'actor' =>'http://schema.nothing.com',\n        'classmap' => array('book'=>'book', 'wsdltype2'=>'classname2')\n        );\n$client = new TestSoapClient(__DIR__.\"/classmap.wsdl\",$options);\n$ret = $client->dotest2(\"???\");\nvar_dump($ret);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
