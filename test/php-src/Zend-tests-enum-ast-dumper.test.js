// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/ast-dumper.phpt
  it("Enum AST dumper", function () {
    expect(parser.parseCode("<?php\ntry {\n    assert((function () {\n        enum Foo {\n            case Bar;\n        }\n        #[EnumAttr]\n        enum IntFoo: int {\n            #[CaseAttr]\n            case Bar = 1 << 0;\n            case Baz = 1 << 1;\n            public function self() {\n                return $this;\n            }\n        }\n        return false;\n    })());\n} catch (Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
