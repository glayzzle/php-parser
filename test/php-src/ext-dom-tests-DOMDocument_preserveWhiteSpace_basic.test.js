// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_preserveWhiteSpace_basic.phpt
  it("DOMDocument::$preserveWhiteSpace - test ability to read and write property", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\nvar_dump($doc->preserveWhiteSpace);\n$doc->preserveWhiteSpace = false;\nvar_dump($doc->preserveWhiteSpace);\n?>")).toMatchSnapshot();
  });
});
