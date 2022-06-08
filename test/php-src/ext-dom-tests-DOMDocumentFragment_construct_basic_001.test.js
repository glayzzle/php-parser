// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentFragment_construct_basic_001.phpt
  it("DOMDocumentFragment::__construct().", function () {
    expect(parser.parseCode("<?php\n$fragment = new DOMDocumentFragment();\nvar_dump(get_class($fragment));\n?>")).toMatchSnapshot();
  });
});
