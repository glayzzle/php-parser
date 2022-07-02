// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_006.phpt
  it("test looping assert (pass)", function () {
    expect(parser.parseCode("<?php\nfor($i=0; $i<100000; $i++) {\n    assert ($i < 100000, \"The universe should make sense\");\n}\nvar_dump(true);\n?>")).toMatchSnapshot();
  });
});
