// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_force_closed.phpt
  it("Cannot \"yield from\" from force closed generator", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    echo \"gen1\\n\";\n    yield 1;\n}\nfunction gen2() {\n    try {\n        echo \"try\\n\";\n        yield from gen1();\n    } finally {\n        echo \"finally\\n\";\n        yield from gen1();\n    }\n}\ntry {\n    $gen = gen2();\n    $gen->rewind();\n    unset($gen);\n} catch (Error $e) {\n    echo $e, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
