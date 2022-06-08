// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54547.phpt
  it("Bug #54547: wrong equality of string numbers near LONG_MAX with 64-bit longs", function () {
    expect(parser.parseCode("<?php\nvar_dump(\"9223372036854775807\" == \"9223372036854775808\");\nvar_dump(\"-9223372036854775808\" == \"-9223372036854775809\");\nvar_dump(\"0x7fffffffffffffff\" == \"9223372036854775808\");\n/* not exactly what the bug is about, but closely related problem: */\nvar_dump(\"999223372036854775807\"==\"999223372036854775808\");\nvar_dump(\"899223372036854775807\">\"00999223372036854775807\");\n?>")).toMatchSnapshot();
  });
});
