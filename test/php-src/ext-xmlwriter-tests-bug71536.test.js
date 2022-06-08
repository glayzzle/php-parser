// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/bug71536.phpt
  it("Bug #71536 (Access Violation crashes php-cgi.exe)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static function init()\n    {\n        $xml = new \\XMLWriter();\n        $xml->openUri('php://memory');\n        $xml->setIndent(false);\n        $xml->startDocument('1.0', 'UTF-8');\n        $xml->startElement('response');\n        die('now'); // crashed with die()\n    }\n}\nTest::init();\n?>")).toMatchSnapshot();
  });
});
