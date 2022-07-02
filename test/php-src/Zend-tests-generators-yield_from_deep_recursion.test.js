// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_deep_recursion.phpt
  it("Deep recursion with yield from", function () {
    expect(parser.parseCode("<?php\nini_set(\"memory_limit\", \"512M\");\nfunction from($i) {\n    yield $i;\n}\nfunction gen($i = 0) {\n    if ($i < 50000) {\n        yield from gen(++$i);\n    } else {\n        yield $i;\n        yield from from(++$i);\n    }\n}\nforeach (gen() as $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
