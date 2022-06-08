// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug41175.phpt
  it("Bug #41175 (addAttribute() fails to add an attribute with an empty value)", function () {
    expect(parser.parseCode("<?php\n$xml = new SimpleXmlElement(\"<img></img>\");\n$xml->addAttribute(\"src\", \"foo\");\n$xml->addAttribute(\"alt\", \"\");\necho $xml->asXML();\n?>")).toMatchSnapshot();
  });
});
