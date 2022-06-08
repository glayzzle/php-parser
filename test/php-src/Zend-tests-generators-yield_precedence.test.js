// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_precedence.phpt
  it("Precedence of yield and arrow operators", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield \"a\" . \"b\";\n    yield \"a\" or die;\n    yield \"k\" => \"a\" . \"b\";\n    yield \"k\" => \"a\" or die;\n    var_dump([yield \"k\" => \"a\" . \"b\"]);\n    yield yield \"k1\" => yield \"k2\" => \"a\" . \"b\";\n    yield yield \"k1\" => (yield \"k2\") => \"a\" . \"b\";\n    var_dump([yield \"k1\" => yield \"k2\" => \"a\" . \"b\"]);\n    var_dump([yield \"k1\" => (yield \"k2\") => \"a\" . \"b\"]);\n}\n$g = gen();\nfor ($g->rewind(), $i = 1; $g->valid(); $g->send($i), $i++) {\n    echo \"{$g->key()} => {$g->current()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
