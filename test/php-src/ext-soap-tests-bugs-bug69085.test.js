// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug69085.phpt
  it("Bug #69085 (SoapClient's __call() type confusion through unserialize())", function () {
    expect(parser.parseCode("<?php\nclass MySoapClient extends SoapClient {\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): string {\n        echo $request, \"\\n\";\n        return '';\n    }\n}\n$dummy = unserialize('O:12:\"MySoapClient\":5:{s:3:\"uri\";s:1:\"a\";s:8:\"location\";s:22:\"http://localhost/a.xml\";s:17:\"__default_headers\";i:1337;s:15:\"__last_response\";s:1:\"a\";s:5:\"trace\";s:1:\"x\";}');\n$dummy->whatever();\n?>")).toMatchSnapshot();
  });
});
