// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug70388.phpt
  it("Bug #70388 (SOAP serialize_function_call() type confusion / RCE)", function () {
    expect(parser.parseCode("<?php\nclass MySoapClient extends SoapClient {\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): string {\n        echo $request, \"\\n\";\n        return '';\n    }\n}\n$dummy = unserialize('O:12:\"MySoapClient\":3:{s:3:\"uri\";s:1:\"X\";s:8:\"location\";s:22:\"http://localhost/a.xml\";s:17:\"__default_headers\";a:1:{i:1;s:1337:\"'.str_repeat(\"X\", 1337).'\";}}');\n$dummy->notexisting();\n?>")).toMatchSnapshot();
  });
});
