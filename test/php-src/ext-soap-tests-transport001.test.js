// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/transport001.phpt
  it("SOAP Transport 1: Local transport using SoapClient::__doRequest", function () {
    expect(parser.parseCode("<?php\nfunction Add($x,$y) {\n  return $x+$y;\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction('Add');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$x = new LocalSoapClient(NULL,array('location'=>'test://',\n                                   'uri'=>'http://testuri.org'));\nvar_dump($x->Add(3,4));\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
