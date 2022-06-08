// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug29839.phpt
  it("Bug #29839 (incorrect convert (xml:lang to lang))", function () {
    expect(parser.parseCode("<?php\nfunction EchoString($s) {\n  return $s;\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction('EchoString');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$client = new LocalSoapClient(__DIR__.\"/bug29839.wsdl\", array(\"trace\"=>1));\n$client->EchoString(array(\"value\"=>\"hello\",\"lang\"=>\"en\"));\necho $client->__getLastRequest();\necho $client->__getLastResponse();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
