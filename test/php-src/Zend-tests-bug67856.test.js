// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67856.phpt
  it("Bug #67856 (Leak when using array_reduce with by-ref function)", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2, 3];\nvar_dump(array_reduce($array, function(&$a, &$b) {\n    return $a + $b;\n}, 0));\n?>")).toMatchSnapshot();
  });
});
