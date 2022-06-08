// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug79271.phpt
  it("Bug #79271 (DOMDocumentType::$childNodes is NULL)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMImplementation();\n$type = $dom->createDocumentType('html');\nvar_dump($type->childNodes);\n?>")).toMatchSnapshot();
  });
});
