// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug46849.phpt
  it("Bug #46849 (Cloning DOMDocument doesn't clone the properties).", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument;\n$dom->formatOutput = 1;\nvar_dump($dom->formatOutput);\n$dom2 = clone $dom;\nvar_dump($dom2->formatOutput);\n?>")).toMatchSnapshot();
  });
});
