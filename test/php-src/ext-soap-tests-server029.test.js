// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server029.phpt
  it("SOAP Server 29-CGI: new/addfunction/handle", function () {
    expect(parser.parseCode("<?php\necho \"INPUT: \\n\";\necho file_get_contents(\"php://input\") . \"\\n\";\necho \"\\n\\n-----------\\n\\n\";\nfunction test() {\n  return \"Hello World\";\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->addfunction(\"test\");\n$server->handle();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
