// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_createAttribute_variation.phpt
  it("Test DOMDocument::createAttribute() for expected return value", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$attr = $dom->createAttribute('string');\necho get_class($attr);\n?>")).toMatchSnapshot();
  });
});
