// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_reduce.phpt
  it("Test array_reduce() function", function () {
    expect(parser.parseCode("<?php\n$array = array('foo', 'foo', 'bar', 'qux', 'qux', 'quux');\necho \"\\n*** Testing array_reduce() to integer ***\\n\";\nfunction reduce_int($w, $v) { return $w + strlen($v); }\n$initial = 42;\nvar_dump(array_reduce($array, 'reduce_int', $initial), $initial);\necho \"\\n*** Testing array_reduce() to float ***\\n\";\nfunction reduce_float($w, $v) { return $w + strlen($v) / 10; }\n$initial = 4.2;\nvar_dump(array_reduce($array, 'reduce_float', $initial), $initial);\necho \"\\n*** Testing array_reduce() to string ***\\n\";\nfunction reduce_string($w, $v) { return $w . $v; }\n$initial = 'quux';\nvar_dump(array_reduce($array, 'reduce_string', $initial), $initial);\necho \"\\n*** Testing array_reduce() to array ***\\n\";\nfunction reduce_array($w, $v) { $w[$v]++; return $w; }\n$initial = array('foo' => 42, 'bar' => 17, 'qux' => -2, 'quux' => 0);\nvar_dump(array_reduce($array, 'reduce_array', $initial), $initial);\necho \"\\n*** Testing array_reduce() to null ***\\n\";\nfunction reduce_null($w, $v) { return $w . $v; }\n$initial = null;\nvar_dump(array_reduce($array, 'reduce_null', $initial), $initial);\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
