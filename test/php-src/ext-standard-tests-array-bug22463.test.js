// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug22463.phpt
  it("Bug #22463 (array_reduce() segfaults)", function () {
    expect(parser.parseCode("<?php\nfunction a($ary) {\n    return (is_array($ary) ? array_reduce($ary, 'cb', 0) : 1);\n}\nfunction cb($v, $elem) {\n    return $v + a($elem);\n}\n$ary = array(\n    array(\n        array(\n            array(\n                array(\n                    array(0, 1, 2, 3, 4)\n                )\n            )\n        )\n    )\n);\nvar_dump(a($ary));\n?>")).toMatchSnapshot();
  });
});
