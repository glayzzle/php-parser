// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentFragment_construct_basic_002.phpt
  it("DOMDocumentFragment::__construct() called twice.", function () {
    expect(parser.parseCode("<?php\n$fragment = new DOMDocumentFragment();\n$fragment->__construct();\nvar_dump($fragment);\n?>")).toMatchSnapshot();
  });
});
