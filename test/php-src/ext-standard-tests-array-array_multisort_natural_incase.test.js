// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_natural_incase.phpt
  it("Test array_multisort() function : natural sorting case-insensitive", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : natural sorting case-insensitive\\n\";\n$a = array(\n    'Second',\n    'First.1',\n    'First.2',\n    'First.3',\n    'Twentieth',\n    'Tenth',\n    'Third',\n);\n$b = array(\n    '2 a',\n    '1 bb 1',\n    '1 bB 2',\n    '1 BB 3',\n    '20 c',\n    '10 d',\n    '3 e',\n);\narray_multisort($b, SORT_NATURAL | SORT_FLAG_CASE, $a);\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
