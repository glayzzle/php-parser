// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/halt02.phpt
  it("__HALT_COMPILER() basic test", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__FILE__, \"r\");\nfseek($fp, __COMPILER_HALT_OFFSET__+1);\nprint fread($fp, 1000);\n__HALT_COMPILER();\nOverlay information...")).toMatchSnapshot();
  });
});
