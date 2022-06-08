// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/013.phpt
  it("interface_exists() tests", function () {
    expect(parser.parseCode("<?php\ninterface foo {\n}\nvar_dump(interface_exists(\"qwerty\"));\nvar_dump(interface_exists(\"\"));\nvar_dump(interface_exists(\"test\", false));\nvar_dump(interface_exists(\"foo\", false));\nvar_dump(interface_exists(\"foo\"));\nvar_dump(interface_exists(\"stdClass\", false));\nvar_dump(interface_exists(\"stdClass\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
