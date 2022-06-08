// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server011.phpt
  it("SOAP Server 11: bind", function () {
    expect(parser.parseCode("<?php\nfunction Add($x,$y) {\n  return $x+$y;\n}\n$server = new soapserver(__DIR__.\"/test.wsdl\");\nob_start();\n$server->handle();\n$wsdl = ob_get_contents();\nob_end_clean();\nif ($wsdl == file_get_contents(__DIR__.\"/test.wsdl\")) {\n  echo \"ok\\n\";\n} else {\n    echo \"fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
