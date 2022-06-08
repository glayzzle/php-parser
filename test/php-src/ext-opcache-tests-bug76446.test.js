// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76446.phpt
  it("Bug #76446 (zend_variables.c:73: zend_string_destroy: Assertion `!(zval_gc_flags((str)->gc)", function () {
    expect(parser.parseCode("<?php\nfunction test()\n{\n    $openmenu = '';\n    $openstr2 = \"&amp;openmenu={$openmenu}{$addlang}\\\"\";\n    return 0;\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
