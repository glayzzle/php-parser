// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54804.phpt
  it("Bug #54804 (__halt_compiler and imported namespaces)", function () {
    expect(parser.parseCode("<?php\nnamespace a;\nrequire __DIR__ . '/bug54804.inc';\necho 'DONE';\n__halt_compiler();\n?>")).toMatchSnapshot();
  });
});
