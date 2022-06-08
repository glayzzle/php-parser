// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug36999.phpt
  it("Bug #36999 (xsd:long values clamped to LONG_MAX instead of using double)", function () {
    expect(parser.parseCode("<?php\nfunction echoLong($num) {\n  return $num;\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl) {\n    parent::__construct($wsdl);\n    $this->server = new SoapServer($wsdl);\n    $this->server->addFunction('echoLong');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$soap = new LocalSoapClient(__DIR__.\"/bug36999.wsdl\");\nfunction test($num) {\n  global $soap;\n  try {\n      printf(\"%s %0.0f\\n\", gettype($num), $num);\n      $ret = $soap->echoLong($num);\n      printf(\"%s %0.0f\\n\", gettype($ret), $ret);\n    } catch (SoapFault $ex) {\n      var_dump($ex);\n    }\n}\ntest(3706790240);\n?>")).toMatchSnapshot();
  });
});
