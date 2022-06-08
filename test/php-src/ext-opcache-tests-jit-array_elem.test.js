// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/array_elem.phpt
  it("Refcount inference when adding array elements", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {\n    $ary = [$a];\n    $ary2 = [0, $ary, $ary];\n    return $ary2;\n}\nvar_dump(test(1));\n?>")).toMatchSnapshot();
  });
});
