// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/integer_literals/octal_64bit.phpt
  it("Octal integer strings (64bit)", function () {
    expect(parser.parseCode("<?php\n/* Using octal prefix notation lowercase */\n/* Maximum value representable as integer */\n$octal = 0o777777777777777777777;\nvar_dump($octal);\nvar_dump(PHP_INT_MAX);\n/* *technically* this should work but treat this as a degenerate case */\n$octal = 0o1000000000000000000000;\nvar_dump($octal);\n/* Floating number */\n$octal = 0o45734321536435450000000000;\nvar_dump($octal);\n/* Integer */\n$octal = 0o16;\nvar_dump($octal);\n/* underscore separator */\n$octal = 0o1_6;\nvar_dump($octal);\n/* Ignore leading 0 and _ */\n$octal = 0o0_016;\nvar_dump($octal);\n$octal = 0o0_16;\nvar_dump($octal);\n/* Overflow to infinity */\n$octal = 0o77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777;\nvar_dump($octal);\n/* Using octal prefix notation uppercase */\n/* Maximum value representable as integer */\n$octal = 0O777777777777777777777;\nvar_dump($octal);\nvar_dump(PHP_INT_MAX);\n/* *technically* this should work but treat this as a degenerate case */\n$octal = 0O1000000000000000000000;\nvar_dump($octal);\n/* Floating number */\n$octal = 0O45734321536435450000000000;\nvar_dump($octal);\n/* Integer */\n$octal = 0O16;\nvar_dump($octal);\n/* underscore separator */\n$octal = 0O1_6;\nvar_dump($octal);\n/* Ignore leading 0 and _ */\n$octal = 0O0_016;\nvar_dump($octal);\n$octal = 0O0_16;\nvar_dump($octal);\n/* Overflow to infinity */\n$octal = 0O77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777;\nvar_dump($octal);\n/* Using no dedicated prefix */\n/* Maximum value representable as integer */\n$octal = 0777777777777777777777;\nvar_dump($octal);\nvar_dump(PHP_INT_MAX);\n/* *technically* this should work but treat this as a degenerate case */\n$octal = 01000000000000000000000;\nvar_dump($octal);\n/* Floating number */\n$octal = 045734321536435450000000000;\nvar_dump($octal);\n/* Integer */\n$octal = 016;\nvar_dump($octal);\n/* underscore separator */\n$octal = 01_6;\nvar_dump($octal);\n/* Ignore leading 0 and _ */\n$octal = 00_016;\nvar_dump($octal);\n$octal = 0_16;\nvar_dump($octal);\n/* Overflow to infinity */\n$octal = 077777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777;\nvar_dump($octal);\n?>")).toMatchSnapshot();
  });
});
