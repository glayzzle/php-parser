// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_dump_during_sort.phpt
  it("Dumping an ArrayObject while it is being sorted", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject([1, 2, 3]);\n$i = 0;\n$ao->uasort(function($a, $b) use ($ao, &$i) {\n    if ($i++ == 0) {\n        var_dump($ao);\n    }\n    return $a <=> $b;\n});\n?>")).toMatchSnapshot();
  });
});
