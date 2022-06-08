// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug34643.phpt
  it("Bug #34643 (wsdl default value)", function () {
    expect(parser.parseCode("<?php\nini_set(\"soap.wsdl_cache_enabled\", 0);\nclass fp {\n    public function get_it($opt=\"zzz\") {\n        return $opt;\n    }\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->setClass('fp');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$cl = new LocalSoapClient(__DIR__.'/bug34643.wsdl', array(\"trace\"=>1));\nprint_r($cl->__getFunctions());\necho $cl->get_it(\"aaa\").\"\\n\";\necho $cl->get_it().\"\\n\";\nvar_dump($cl->get_it(null));\n?>")).toMatchSnapshot();
  });
});
