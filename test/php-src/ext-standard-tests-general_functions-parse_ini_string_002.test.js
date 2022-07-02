// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/parse_ini_string_002.phpt
  it("parse_ini_string() multiple calls", function () {
    expect(parser.parseCode("<?php\n$ini = \"\ntest =\n\";\nvar_dump(parse_ini_string($ini));\n$ini = \"\ntest==\n\";\nvar_dump(parse_ini_string($ini));\n$ini = \"\ntest=test=\n\";\nvar_dump(parse_ini_string($ini));\n$ini = \"\ntest= \\\"new\nline\\\"\n\";\nvar_dump(parse_ini_string($ini));\ndefine(\"TEST_CONST\", \"test const value\");\n$ini = \"\ntest=TEST_CONST\n\";\nvar_dump(parse_ini_string($ini));\n$ini = \"\n[section]\ntest=hello\n\";\nvar_dump(parse_ini_string($ini, true));\n$ini = \"\n[section]\ntest=hello\n\";\nvar_dump(parse_ini_string($ini, false));\n$ini = \"\nsection.test=hello\n\";\nvar_dump(parse_ini_string($ini, true));\n$ini = \"\n[section]\nsection.test=hello\n\";\nvar_dump(parse_ini_string($ini, true));\n$ini = \"\n[section]\n1=2\n\";\nvar_dump(parse_ini_string($ini, true));\n$ini = \"\n1=2\n\";\nvar_dump(parse_ini_string($ini, true));\n$ini = \"\ntest=test2\ntest=test3\ntest=test4\n\";\nvar_dump(parse_ini_string($ini, true));\n/* From bug #44574 */\n$ini = \"[section1]\\nname = value\";\nvar_dump(parse_ini_string($ini, true));\n/* #44842, labels starting with underscore */\n$ini = <<<'INI'\nfoo=bar1\n_foo=bar2\nfoo_=bar3\nINI;\nvar_dump(parse_ini_string($ini, true));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
