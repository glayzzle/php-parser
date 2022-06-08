// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug77141.phpt
  it("Bug #77141 (Signedness issue in SOAP when precision=-1)", function () {
    expect(parser.parseCode("<?php\nclass MySoapClient extends SoapClient {\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): string {\n        echo $request, \"\\n\";\n        return '';\n    }\n}\n$soap = new MySoapClient(\n    null,\n    array(\n        'location' => \"http://localhost/soap.php\",\n        'uri' => \"http://localhost/\",\n        'style' => SOAP_RPC,\n        'trace' => true,\n        'exceptions' => false,\n    )\n);\nini_set('precision', -1);\n$soap->call(1.1);\n?>")).toMatchSnapshot();
  });
});
