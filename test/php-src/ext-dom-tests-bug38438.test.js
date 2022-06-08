// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug38438.phpt
  it("Bug #38438 (DOMNodeList->item(0) segfault on empty NodeList)", function () {
    expect(parser.parseCode("<?php\n$list = new DOMNodeList();\nvar_dump($list->item(0));\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
