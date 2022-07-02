// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69989_2.phpt
  it("Collection of some cycles on unfinished generators", function () {
    expect(parser.parseCode("<?php\n// CV\nfunction gen1() {\n    $gen = yield;\n    yield;\n}\n$gen = gen1();\n$gen->send($gen);\n// This\nclass Test {\n    public $gen;\n    public function gen2() {\n        yield;\n    }\n}\n$test = new Test;\n$test->gen = $test->gen2();\n// Closure object\n$gen3 = (function() use (&$gen3) {\n    yield;\n})();\n// Yield from array\nfunction gen4() {\n    yield from [yield];\n}\n$gen = gen4();\n$gen->send($gen);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
