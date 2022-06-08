// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server008.phpt
  it("SOAP Server 8: setclass and getfunctions", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  function __construct() {\n  }\n  function test() {\n    return $this->str;\n  }\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->setclass(\"Foo\");\nvar_dump($server->getfunctions());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
