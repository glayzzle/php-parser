// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/unexpected_array_mod_bug_variation1.phpt
  it("Crash when function parameter modified via reference while keeping orig refcount", function () {
    expect(parser.parseCode("<?php\n$array = array(\n    1 => \"entry_1\",\n    2 => \"entry_2\",\n    3 => \"entry_3\",\n    4 => \"entry_4\",\n    5 => \"entry_5\"\n);\nusort($array, function($a, $b) use (&$array, &$ref) {\n    unset($array[2]);\n    $ref = $array;\n    return $a <=> $b;\n});\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
