// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug70965.phpt
  it("Bug #70965 (yield from with a common iterator primes too much)", function () {
    expect(parser.parseCode("<?php\nfunction it() {\n    yield from [1, 2, 3, 4, 5];\n}\nfunction bar($g) {\n    yield from $g;\n}\n$gen = it();\n$gens[] = bar($gen);\n$gens[] = bar($gen);\ndo {\n    foreach($gens as $g) {\n        var_dump($g->current());\n        $gen->next();\n    }\n} while ($gen->valid());\n?>")).toMatchSnapshot();
  });
});
