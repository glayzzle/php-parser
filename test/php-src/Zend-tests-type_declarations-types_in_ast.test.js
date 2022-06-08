// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/types_in_ast.phpt
  it("AST pretty-printer", function () {
    expect(parser.parseCode("<?php\nassert(0 && ($a = function (int $a, ?int $b, int $c = null): ?int {\n    $x = new class {\n        public $a;\n        public int $b;\n        public ?int $c;\n    };\n}));\n?>")).toMatchSnapshot();
  });
});
