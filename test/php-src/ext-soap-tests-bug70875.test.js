// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug70875.phpt
  it("SOAP Bug #70875 - Segmentation fault if wsdl has no targetNamespace attribute", function () {
    expect(parser.parseCode("<?php\nclass bug70875 extends SOAPClient\n{\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): ?string\n    {\n        die(\"no SIGSEGV\");\n    }\n}\n$c = new bug70875(__DIR__.'/bug70875.wsdl', [\n    'trace' => 1,\n    'classmap' => [\n        'TestService' => 'TestService',\n        'TestServiceRQ' => 'TestServiceRQ',\n        'RqHeader' => 'RqHeader',\n    ],\n]);\nclass TestService\n{\n    public $TestServiceRQ;\n}\nclass TestServiceRQ\n{\n    public $RqHeader;\n}\nclass RqHeader\n{\n}\n$r = new TestService();\n$r->TestServiceRQ = new TestServiceRQ();\n$r->TestServiceRQ->RqHeader = new RqHeader();\n$c->testService($r);\n?>")).toMatchSnapshot();
  });
});
