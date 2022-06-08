// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server012.phpt
  it("SOAP Server 12: WSDL generation", function () {
    expect(parser.parseCode("<?php\nfunction Add($x,$y) {\n  return $x+$y;\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->addfunction(\"Add\");\n$server->handle();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
