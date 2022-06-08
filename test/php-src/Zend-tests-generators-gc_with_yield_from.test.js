// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/gc_with_yield_from.phpt
  it("Verify yield from on generators being properly cycle collected", function () {
    expect(parser.parseCode("<?php\nfunction root() {\n    global $gens; // create cyclic reference to root\n    try {\n        yield 1;\n    } finally {\n        var_dump($gens);\n    }\n}\nfunction gen($x) {\n    global $gens;\n    yield from $gens[] = $x ? gen(--$x) : root();\n}\n$gen = $gens[] = gen(2);\nvar_dump($gen->current());\nunset($gen, $gens);\nprint \"collect\\n\";\ngc_collect_cycles();\nprint \"end\\n\";\n?>")).toMatchSnapshot();
  });
});
