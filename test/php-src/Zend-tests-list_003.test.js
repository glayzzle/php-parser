// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_003.phpt
  it("list() with non-array", function () {
    expect(parser.parseCode("<?php\nlist($a) = NULL;\nlist($b) = 1;\nlist($c) = 1.;\nlist($d) = 'foo';\nlist($e) = print '';\nvar_dump($a, $b, $c, $d, $e);\n?>")).toMatchSnapshot();
  });
});
