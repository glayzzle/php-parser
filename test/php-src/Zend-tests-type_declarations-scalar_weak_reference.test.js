// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_weak_reference.phpt
  it("Weak scalar types, with references", function () {
    expect(parser.parseCode("<?php\n// implicitly weak mode code\nfunction to_int(int &$x) {}\nfunction to_float(float &$x) {}\nfunction to_string(string &$x) {}\nfunction to_bool(bool &$x) {}\n$x = 1.0;\nvar_dump($x);\nto_int($x); // because $x is by-reference, the weak type converts it\nvar_dump($x);\nto_float($x);\nvar_dump($x);\nto_string($x);\nvar_dump($x);\nto_bool($x);\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
