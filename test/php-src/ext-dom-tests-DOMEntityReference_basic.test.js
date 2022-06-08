// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMEntityReference_basic.phpt
  it("DOMEntityReference - read $nodeName property", function () {
    expect(parser.parseCode("<?php\n$der = new DOMEntityReference('nbsp');\nvar_dump($der->nodeName);\n?>")).toMatchSnapshot();
  });
});
