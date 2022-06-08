// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server020.phpt
  it("SOAP Server 20: compressed request (deflate)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n  return \"Hello World\";\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->addfunction(\"test\");\n$server->handle();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
