// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug65018.phpt
  it("Bug #65018 (SoapHeader problems with SoapServer)", function () {
    expect(parser.parseCode("<?php\n    class Tool{\n        public function TOKEN($id){\n            return new SoapHeader('namespace1', 'TOKEN', $id, true);\n        }\n        public function Method(){}\n    }\n    $input = $input =\n        '<?xml version=\"1.0\"?>'.PHP_EOL.\n        '<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"namespace1\"'.\n        ' xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"'.\n        ' xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">'.\n        '<SOAP-ENV:Header><ns1:TOKEN soapenv:mustUnderstand=\"1\">abc</ns1:TOKEN></SOAP-ENV:Header>'.\n        '<SOAP-ENV:Body><ns1:Method /></SOAP-ENV:Body></SOAP-ENV:Envelope>';\n    $soap = new SoapServer(null, array('uri' => '127.0.0.1'));\n    $soap->setClass('Tool');\n    $soap->handle($input);\n?>")).toMatchSnapshot();
  });
});
