// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/basic_yield_from_proxying.phpt
  it("Basic test if yield from works", function () {
    expect(parser.parseCode("<?php\nfunction from() {\n    yield \"from\" => 1;\n    yield 2;\n}\nfunction gen() {\n    yield \"gen\" => 0;\n    yield from from();\n    yield 3;\n}\n/* foreach API */\nforeach (gen() as $k => $v) {\n    var_dump($k, $v);\n}\n/* iterator API */\nfor ($gen = gen(); $gen->valid(); $gen->next()) {\n    var_dump($gen->key(), $gen->current());\n}\n?>")).toMatchSnapshot();
  });
});
