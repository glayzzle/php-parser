// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug75451.phpt
  it("Bug #75451 (Assertion fails while foreach on empty xpath query)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$dom->loadXML('<root><child/></root>');\n$xpath = new DOMXpath($dom);\nforeach($xpath->query('/root/noexist') as $child) {\n    var_dump($child);\n}\n?>\nokey")).toMatchSnapshot();
  });
});
