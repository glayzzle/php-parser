// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/mutli_yield_from_with_exception.phpt
  it("Multiple yield from on a same Generator throwing an Exception", function () {
    expect(parser.parseCode("<?php\nfunction from() {\n    yield 1;\n    throw new Exception();\n}\nfunction gen($gen) {\n    try {\n        var_dump(yield from $gen);\n    } catch (Exception $e) { print \"Caught exception!\\n$e\\n\"; }\n}\n$gen = from();\n$gens[] = gen($gen);\n$gens[] = gen($gen);\nforeach ($gens as $g) {\n    $g->current(); // init.\n}\ndo {\n    foreach ($gens as $i => $g) {\n        print \"Generator $i\\n\";\n        var_dump($g->current());\n        $g->next();\n    }\n} while($gens[0]->valid());\n?>")).toMatchSnapshot();
  });
});
