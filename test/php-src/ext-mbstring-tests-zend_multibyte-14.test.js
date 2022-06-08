// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-14.phpt
  it("zend multibyte (14)", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr(file_get_contents(__FILE__), __COMPILER_HALT_OFFSET__));\nvar_dump(bin2hex(\"äëüáéú\"));\n__halt_compiler();test\ntest")).toMatchSnapshot();
  });
});
