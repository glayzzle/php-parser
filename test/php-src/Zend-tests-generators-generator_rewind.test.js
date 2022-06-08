// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_rewind.phpt
  it("A generator can only be rewinded before or at the first yield", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    echo \"before yield\\n\";\n    yield;\n    echo \"after yield\\n\";\n    yield;\n}\n$gen = gen();\n$gen->rewind();\n$gen->rewind();\n$gen->next();\ntry {\n    $gen->rewind();\n} catch (Exception $e) {\n    echo \"\\n\", $e, \"\\n\\n\";\n}\nfunction &gen2() {\n    $foo = 'bar';\n    yield $foo;\n    yield $foo;\n}\n$gen = gen2();\nforeach ($gen as $v) { }\ntry {\n    foreach ($gen as $v) { }\n} catch (Exception $e) {\n    echo $e, \"\\n\\n\";\n}\nfunction gen3() {\n    echo \"in generator\\n\";\n    if (false) yield;\n}\n$gen = gen3();\n$gen->rewind();\n?>")).toMatchSnapshot();
  });
});
