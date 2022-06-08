// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71529.phpt
  it("Bug #71529: Variable references on array elements don't work when using count", function () {
    expect(parser.parseCode("<?php\n$a = [1];\n$a[] = &$a[out(count($a) - 1)];\nvar_dump($a);\nfunction out($what) {\n    var_dump($what);\n    return $what;\n}\n?>")).toMatchSnapshot();
  });
});
