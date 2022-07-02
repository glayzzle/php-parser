// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_006.phpt
  it("Foreach by reference on constant", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 3; $i++) {\n    foreach ([1,2,3] as &$val) {\n        echo \"$val\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
