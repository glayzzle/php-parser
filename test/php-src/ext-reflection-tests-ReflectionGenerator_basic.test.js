// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionGenerator_basic.phpt
  it("ReflectionGenerator basic test", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    yield;\n}\n$gens = [\n    (new class() {\n        function a() {\n            yield from foo();\n        }\n    })->a(),\n    (function() {\n        yield;\n    })(),\n    foo(),\n];\nforeach ($gens as $gen) {\n    var_dump($gen);\n    $gen->valid(); // start Generator\n    $ref = new ReflectionGenerator($gen);\n    var_dump($ref->getTrace());\n    var_dump($ref->getExecutingLine());\n    var_dump($ref->getExecutingFile());\n    var_dump($ref->getExecutingGenerator());\n    var_dump($ref->getFunction());\n    var_dump($ref->getThis());\n}\n?>")).toMatchSnapshot();
  });
});
