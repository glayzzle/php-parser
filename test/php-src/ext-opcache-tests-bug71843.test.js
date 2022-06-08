// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug71843.phpt
  it("Bug #71843 (null ptr deref ZEND_RETURN_SPEC_CONST_HANDLER (zend_vm_execute.h:3479))", function () {
    expect(parser.parseCode("<?php\ndefine('E', 'E');\ndefine('R', 'R');\ndefine('See', 'See');\n\"0\" & ~E & ~R;\n6 && ~See\n?>\nokey")).toMatchSnapshot();
  });
});
