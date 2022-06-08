// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMImplementation_createDocument_basic.phpt
  it("DOMImplementation::createDocument()", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\n$x = new DOMImplementation();\n$doc = $x->createDocument(null, 'html');\necho $doc->saveHTML();\n?>")).toMatchSnapshot();
  });
});
