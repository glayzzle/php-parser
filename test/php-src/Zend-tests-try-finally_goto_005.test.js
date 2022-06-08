// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/finally_goto_005.phpt
  it("There must be a difference between label: try { ... } and try { label: ... }", function () {
    expect(parser.parseCode("<?php\nlabel: try {\n    goto label;\n} finally {\n    print \"success\";\n    return; // don't loop\n}\n?>")).toMatchSnapshot();
  });
});
