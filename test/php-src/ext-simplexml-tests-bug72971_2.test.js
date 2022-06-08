// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug72971_2.phpt
  it("Bug #72971 (2): SimpleXML property write does not respect namespace", function () {
    expect(parser.parseCode("<?php\n$xml = new SimpleXMLElement('<root xmlns:ns=\"ns\"><foo>bar</foo><ns:foo>ns:bar</ns:foo></root>');\n$xml->foo = 'new-bar';\nvar_dump($xml->foo);\nvar_dump($xml->children('ns')->foo);\n$xml->children('ns')->foo = 'ns:new-bar';\nvar_dump($xml->foo);\nvar_dump($xml->children('ns')->foo);\n?>")).toMatchSnapshot();
  });
});
