// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom_import_simplexml.phpt
  it("Interop Test: Import from SimpleXML", function () {
    expect(parser.parseCode("<?php\n$s = simplexml_load_file(__DIR__.\"/book.xml\");\nif(!$s) {\n  echo \"Error while loading the document\\n\";\n  exit;\n}\n$dom = dom_import_simplexml($s);\nprint $dom->ownerDocument->saveXML();\n?>")).toMatchSnapshot();
  });
});
