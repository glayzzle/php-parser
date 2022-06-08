// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server027.phpt
  it("SOAP Server 27: setObject and getFunctions", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  function __construct() {\n  }\n  function test() {\n    return $this->str;\n  }\n}\n$foo = new Foo();\n$server = new SoapServer(null,array('uri'=>\"http://testuri.org\"));\n$server->setObject($foo);\nvar_dump($server->getfunctions());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
