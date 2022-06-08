// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_008.phpt
  it("SPL: FixedArray: Assigning the itself object testing the reference", function () {
    expect(parser.parseCode("<?php\n$b = 3;\n$a = new SplFixedArray($b);\n$a[0] = 1;\n$a[1] = 2;\n$a[2] = $a;\n$a[2][0] = 3;\nforeach ($a as $x) {\n    if (is_object($x)) {\n        var_dump($x[0]);\n    } else {\n        var_dump($x);\n    }\n}\nvar_dump($a->getSize());\n?>")).toMatchSnapshot();
  });
});
