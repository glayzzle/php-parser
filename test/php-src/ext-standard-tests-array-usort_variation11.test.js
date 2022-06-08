// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/usort_variation11.phpt
  it("Test usort() function : usage variations - malformed comparison function returning boolean", function () {
    expect(parser.parseCode("<?php\nfunction ucmp($a, $b) {\n    return $a > $b;\n}\n$range = array(2, 4, 8, 16, 32, 64, 128);\nforeach ($range as $r) {\n    $backup = $array = range(0, $r);\n    shuffle($array);\n    usort($array, \"ucmp\");\n    if ($array != $backup) {\n        var_dump($array);\n        var_dump($backup);\n        die(\"Array not sorted (usort)\");\n    }\n    shuffle($array);\n    $array = array_flip($array);\n    uksort($array, \"ucmp\");\n    $array = array_keys($array);\n    if ($array != $backup) {\n        var_dump($array);\n        var_dump($backup);\n        die(\"Array not sorted (uksort)\");\n    }\n    shuffle($array);\n    $array = array_combine($array, $array);\n    uasort($array, \"ucmp\");\n    $array = array_keys($array);\n    if ($array != $backup) {\n        var_dump($array);\n        var_dump($backup);\n        die(\"Array not sorted (uasort)\");\n    }\n}\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
