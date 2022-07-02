// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/halt_compiler1.phpt
  it("__HALT_COMPILER();", function () {
    expect(parser.parseCode("<?php echo 'test'; var_dump(__COMPILER_HALT_OFFSET__); __HALT_COMPILER();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
