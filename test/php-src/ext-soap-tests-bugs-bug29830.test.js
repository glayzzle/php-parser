// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug29830.phpt
  it("Bug #29844 (SoapServer::setClass() should not export non-public methods)", function () {
    expect(parser.parseCode("<?php\nclass hello_world {\n  public function hello($to) {\n    return 'Hello ' . $to;\n  }\n  private function bye($to) {\n    return 'Bye ' . $to;\n  }\n}\n$server = new SoapServer(NULL, array(\"uri\"=>\"test://\"));\n$server->setClass('hello_world');\n$functions = $server->getFunctions();\nforeach($functions as $func) {\n  echo $func . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
