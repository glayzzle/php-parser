// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/003.phpt
  it("Test usort, uksort and uasort", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/data.inc');\nfunction cmp ($a, $b) {\n    is_array ($a)\n        and $a = array_sum ($a);\n    is_array ($b)\n        and $b = array_sum ($b);\n    return strcmp ($a, $b);\n}\necho \" -- Testing uasort() -- \\n\";\nuasort ($data, 'cmp');\nvar_dump ($data);\necho \"\\n -- Testing uksort() -- \\n\";\nuksort ($data, 'cmp');\nvar_dump ($data);\necho \"\\n -- Testing usort() -- \\n\";\nusort ($data, 'cmp');\nvar_dump ($data);\n?>")).toMatchSnapshot();
  });
});
