// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug37076.phpt
  it("Bug #37076 (SimpleXML ignores .=)", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string(\"<root><foo /></root>\");\n$xml->foo = \"foo\";\n$xml->foo .= \"bar\";\nprint $xml->asXML();\n?>")).toMatchSnapshot();
  });
});
