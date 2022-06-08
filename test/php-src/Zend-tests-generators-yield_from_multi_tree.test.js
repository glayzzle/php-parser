// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_multi_tree.phpt
  it("yield from on multiple trees needing merge", function () {
    expect(parser.parseCode("<?php\nfunction from($levels) {\n    foreach (range(0, 2 << $levels) as $v) {\n        yield $v;\n    }\n}\nfunction gen($gen, $level) {\n    yield from $gen;\n}\nforeach (range(0, 6) as $levels) {\n    print \"$levels level\".($levels == 1 ? \"\" : \"s\").\"\\n\\n\";\n    $all = array();\n    $all[] = $gens[0][0] = from($levels);\n    for ($level = 1; $level < $levels; $level++) {\n        for ($i = 0; $i < (1 << $level); $i++) {\n            $all[] = $gens[$level][$i] = gen($gens[$level-1][$i >> 1], $level);\n        }\n    }\n    while (1) {\n        foreach ($all as $gen) {\n            var_dump($gen->current());\n            $gen->next();\n            if (!$gen->valid()) {\n                break 2;\n            }\n        }\n    }\n    print \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
