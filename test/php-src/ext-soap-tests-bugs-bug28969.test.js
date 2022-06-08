// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug28969.phpt
  it("Bug #28969 (Wrong data encoding of special characters)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n  return \"��\";\n//  return utf8_encode(\"��\");\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction('test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$x = new LocalSoapClient(NULL,array('location'=>'test://',\n                                    'uri'=>'http://testuri.org',\n                                    'encoding'=>'ISO-8859-1'));\nvar_dump($x->test());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
