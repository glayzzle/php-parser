// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_natural.phpt
  it("Test array_multisort() function : natural sorting", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : natural sorting\\n\";\n$a = array(\n    'Second',\n    'First',\n    'Twentieth',\n    'Tenth',\n    'Third',\n);\n$b = array(\n    '2 a',\n    '1 b',\n    '20 c',\n    '10 d',\n    '3 e',\n);\narray_multisort($b, SORT_NATURAL, $a);\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
