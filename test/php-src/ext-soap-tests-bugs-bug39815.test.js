// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug39815.phpt
  it("Bug #39815 (to_zval_double() in ext/soap/php_encoding.c is not locale-independent)", function () {
    expect(parser.parseCode("<?php\nfunction test(){\n  return 123.456;\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction('test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$x = new LocalSoapClient(NULL,array('location'=>'test://',\n                                   'uri'=>'http://testuri.org',\n                                   \"trace\"=>1));\nsetlocale(LC_ALL,\"sv_SE\",\"sv_SE.ISO8859-1\");\nvar_dump($x->test());\necho $x->__getLastResponse();\nsetlocale(LC_ALL,\"en_US\",\"en_US.ISO8859-1\");\nvar_dump($x->test());\necho $x->__getLastResponse();\n?>")).toMatchSnapshot();
  });
});
