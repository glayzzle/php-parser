// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_evaluation_order_3.phpt
  it("list() with keys, evaluation order #3", function () {
    expect(parser.parseCode("<?php\n$i = 0;\n$a = [\n    0 => [\n        'b' => 'bar',\n        'a' => 'foo',\n    ],\n    1 => 'a',\n    3 => 'b',\n];\nlist($a[$i++] => $a[$i++], $a[$i++] => $a[$i++]) = $a[$i++];\nvar_dump($i); // should be 5\nvar_dump($a[2]); // should be 'foo'\nvar_dump($a[4]); // should be 'bar'\n?>")).toMatchSnapshot();
  });
});
