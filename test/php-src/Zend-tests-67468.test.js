// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/67468.phpt
  it("Bug #67468 (Segfault in highlight_file()/highlight_string())", function () {
    expect(parser.parseCode("<?php\nhighlight_string(\"<?php __CLASS__;\", true);\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
