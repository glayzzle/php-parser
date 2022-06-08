// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41640.phpt
  it("Bug #41640 (get_class_vars produces error on class constants)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n        const FOO = 1;\n        public $x = self::FOO;\n}\nvar_dump(get_class_vars(\"foo\"));\n?>")).toMatchSnapshot();
  });
});
