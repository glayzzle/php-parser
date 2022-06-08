// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/024.phpt
  it("FFI 024: anonymous struct/union", function () {
    expect(parser.parseCode("<?php\n    $p = FFI::new(\"\n    struct {\n        int a;\n        struct {\n            int b;\n            int c;\n        };\n        union {\n            int d;\n            uint32_t e;\n        };\n        int f;\n    }\");\n    var_dump(FFI::sizeof($p));\n    $p->a = 1;\n    $p->b = 2;\n    $p->c = 3;\n    $p->d = 4;\n    $p->f = 5;\n    var_dump($p);\n?>")).toMatchSnapshot();
  });
});
