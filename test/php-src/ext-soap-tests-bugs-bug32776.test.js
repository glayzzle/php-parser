// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug32776.phpt
  it("Bug #32776 (SOAP doesn't support one-way operations)", function () {
    expect(parser.parseCode("<?php\n$d = null;\nfunction test($x) {\n    global $d;\n    $d = $x;\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction('test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$x = new LocalSoapClient(__DIR__.\"/bug32776.wsdl\",array(\"trace\"=>true,\"exceptions\"=>false));\nvar_dump($x->test(\"Hello\"));\nvar_dump($d);\nvar_dump($x->__getLastRequest());\nvar_dump($x->__getLastResponse());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
