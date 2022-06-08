// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug38004.phpt
  it("Bug #38004 (Parameters in SoapServer are decoded twice)", function () {
    expect(parser.parseCode("<?php\nfunction Test($param) {\n    global $g;\n    $g = $param->strA.\"\\n\".$param->strB.\"\\n\";\n    return $g;\n}\nclass TestSoapClient extends SoapClient {\n  function __construct($wsdl) {\n    parent::__construct($wsdl);\n    $this->server = new SoapServer($wsdl);\n    $this->server->addFunction('Test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$client = new TestSoapClient(__DIR__.'/bug38004.wsdl');\n$strA = 'test &amp; test';\n$strB = 'test & test';\n$res = $client->Test(array('strA'=>$strA, 'strB'=>$strB));\nprint_r($res);\nprint_r($g);\n?>")).toMatchSnapshot();
  });
});
