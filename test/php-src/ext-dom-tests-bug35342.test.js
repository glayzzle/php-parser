// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug35342.phpt
  it("Bug #35342 (isset(DOMNodeList->length) returns false)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$dom->loadXML(\"<root><foo>foobar</foo><foo>foobar#2</foo></root>\");\n$nodelist = $dom->getElementsByTagName(\"foo\");\nvar_dump($nodelist->length, isset($nodelist->length), isset($nodelist->foo));\nvar_dump(empty($nodelist->length), empty($nodelist->foo));\n?>")).toMatchSnapshot();
  });
});
