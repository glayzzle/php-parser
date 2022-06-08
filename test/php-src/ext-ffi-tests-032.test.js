// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/032.phpt
  it("FFI 032: bit-fields access", function () {
    expect(parser.parseCode("<?php\n$p = FFI::new(\"\n    union {\n        struct __attribute__((packed)) {\n            int a:2;\n            unsigned long long b:64;\n            int c:3;\n            unsigned int d:3;\n        } s;\n    uint8_t i[9];\n}\");\nvar_dump(FFI::sizeof($p));\nfor ($i = -5; $i < 9; $i++) {\n    $p->s->c = $i;\n    $p->s->d = $i;\n    echo \"$i => 3-bit int {$p->s->c}, 3-bit uint {$p->s->d}\\n\";\n}\n$p->s->a = 0;\n$p->s->c = 0;\n$p->s->d = 0;\n$p->s->b = 0x7fffffff;\necho \"0x\";\nfor ($i = 9; $i > 0;) {\n    printf(\"%02x\", $p->i[--$i]);\n}\necho \"\\n\";\n?>\nok")).toMatchSnapshot();
  });
});
