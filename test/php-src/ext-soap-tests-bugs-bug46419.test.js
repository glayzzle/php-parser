// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug46419.phpt
  it("Bug #46419 (Elements of associative arrays with NULL value are lost)", function () {
    expect(parser.parseCode("<?php\nfunction bar() {\n  return array('a' => 1, 'b' => NULL, 'c' => 2, 'd'=>'');\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction('bar');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$x = new LocalSoapClient(NULL,array('location'=>'test://',\n                                   'uri'=>'http://testuri.org'));\nvar_dump($x->bar());\n?>")).toMatchSnapshot();
  });
});
