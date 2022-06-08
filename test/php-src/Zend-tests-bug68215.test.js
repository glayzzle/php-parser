// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68215.phpt
  it("Bug #68215 (Behavior of foreach has changed)", function () {
    expect(parser.parseCode("<?php\n$arr = array(\n    'a' => array(\n        'a' => 'apple',\n        'b' => 'banana',\n        'c' => 'cranberry',\n        'd' => 'mango',\n        'e' => 'pineapple'\n    ),\n    'b' => array(\n        'a' => 'apple',\n        'b' => 'banana',\n        'c' => 'cranberry',\n        'd' => 'mango',\n        'e' => 'pineapple'\n    ),\n    'c' => 'cranberry',\n    'd' => 'mango',\n    'e' => 'pineapple'\n);\nfunction test(&$child, $entry)\n{\n    $i = 1;\n    foreach ($child AS $key => $fruit)\n    {\n        if (!is_numeric($key))\n        {\n            $child[$i] = $fruit;\n            unset($child[$key]);\n            $i++;\n        }\n    }\n}\n$i = 1;\nforeach ($arr AS $key => $fruit)\n{\n    $arr[$i] = $fruit;\n    if (is_array($fruit))\n    {\n        test($arr[$i], $fruit);\n    }\n    unset($arr[$key]);\n    $i++;\n}\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
