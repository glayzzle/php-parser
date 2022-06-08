// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/classmap004.phpt
  it("SOAP Classmap 4: encoding of objects with __get()", function () {
    expect(parser.parseCode("<?php\nini_set(\"soap.wsdl_cache_enabled\",0);\nclass A {\n  public $a;\n  function __construct($a){\n    $this->x = $a;\n  }\n  function __get($name) {\n    return @$this->a[$name];\n  }\n  function __set($name, $val) {\n    $this->a[$name] = $val;\n  }\n  function __unset($name) {\n    unset($this->a[$name]);\n  }\n}\nclass B extends A {\n  function __construct($a){\n    parent::__construct($a);\n    $this->y = $a + 1;\n  }\n}\nfunction f(){\n  return new B(5);\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction(\"f\");\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$client = new LocalSoapClient(__DIR__.\"/classmap003.wsdl\",\n    array('classmap'=>array('A'=>'A','B'=>'B')));\nprint_r($client->f());\n?>")).toMatchSnapshot();
  });
});
