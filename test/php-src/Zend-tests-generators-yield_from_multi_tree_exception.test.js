// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_multi_tree_exception.phpt
  it("yield from on multiple trees needing merge", function () {
    expect(parser.parseCode("<?php\nfunction from($levels) {\n    foreach (range(0, 2 << $levels) as $v) {\n        yield $v;\n        if ($v == (1 << ($levels - 1)) - 2) {\n            throw new Exception();\n        }\n    }\n}\nfunction gen($gen, $level) {\n    yield from $gen;\n}\n$levels = 5;\nprint \"$levels levels\\n\\n\";\n$all = array();\n$all[] = $gens[0][0] = from($levels);\nfor ($level = 1; $level < $levels; $level++) {\n    for ($i = 0; $i < (1 << $level); $i++) {\n        $all[] = $gens[$level][$i] = gen($gens[$level-1][$i >> 1], $level);\n    }\n}\nfor ($i = 0; $i < 2; $i++) {\n    try {\n        foreach ($all as $gen) {\n            var_dump($gen->current());\n            $gen->next();\n            if (!$gen->valid()) {\n                break;\n            }\n        }\n    } catch(Exception $e) {\n        print \"$e\\n\";\n        unset($all[array_search($gen, $all)]);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
