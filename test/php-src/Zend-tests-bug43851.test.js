// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43851.phpt
  it("Bug #43851 (Memory corrution on reuse of assigned value)", function () {
    expect(parser.parseCode("<?php\nfoo();\nfunction foo() {\n    global $LAST;\n    ($LAST = $LAST + 0) * 1;\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
