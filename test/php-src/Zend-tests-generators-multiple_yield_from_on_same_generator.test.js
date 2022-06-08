// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/multiple_yield_from_on_same_generator.phpt
  it("Multiple yield from on a same Generator instance", function () {
    expect(parser.parseCode("<?php\nfunction gen($a = 0) {\n    yield 1 + $a;\n    if ($a < 1) {\n        var_dump(yield from gen($a + 1));\n    }\n    yield 3 + $a;\n    return 5 + $a;\n}\nfunction bar($gen) {\n    var_dump(yield from $gen);\n}\n/* Twice a Generator from bar() using yield from on $gen */\n$gen = gen();\n$gens[] = bar($gen);\n$gens[] = bar($gen);\ndo {\n    foreach ($gens as $g) {\n        var_dump($g->current());\n        $g->next();\n    }\n} while($gens[0]->valid());\nvar_dump($gens[1]->valid());\n?>")).toMatchSnapshot();
  });
});
