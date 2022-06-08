// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug30928.phpt
  it("Bug #30928 (When Using WSDL, SoapServer doesn't handle private or protected properties)", function () {
    expect(parser.parseCode("<?php\nini_set(\"soap.wsdl_cache_enabled\", 0);\nclass foo {\n    public    $a=\"a\";\n    private   $b=\"b\";\n    protected $c=\"c\";\n}\nfunction test($x) {\n  return $x;\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction('test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$x = new LocalSoapClient(__DIR__.\"/bug30928.wsdl\",\n                         array());\nvar_dump($x->test(new foo()));\n$x = new LocalSoapClient(__DIR__.\"/bug30928.wsdl\",\n                         array(\"classmap\" => array('testType'=>'foo')));\nvar_dump($x->test(new foo()));\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
