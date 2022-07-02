// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61681.phpt
  it("Bug #61681: Malformed grammar", function () {
    expect(parser.parseCode("<?php\n$la = \"ooxx\";\necho \"${substr('laruence', 0, 2)}\";\n?>")).toMatchSnapshot();
  });
});
