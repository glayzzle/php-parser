// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_aborted_generator_with_children.phpt
  it("Impossible to yield from a generator which already failed, nested version", function () {
    expect(parser.parseCode("<?php\nfunction from() {\n    yield 0;\n    throw new Exception();\n}\nfunction gen($gen) {\n    yield from $gen;\n}\n$gen1 = from();\n$gen2 = gen($gen1);\n$gen3 = gen($gen1);\ntry {\n    $gen2->next();\n} catch (Exception $e) {\n    unset($gen2);\n}\n$gen3->next();\n?>")).toMatchSnapshot();
  });
});
