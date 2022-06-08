// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/qm_assign_003.phpt
  it("JIT QM_ASSIGN: 003 missing type store", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    for($cnt2=0;$cnt<6;$cnt++) {\n        $a &= 15;\n        $a = \"4294967295\";\n        $a *= $a;\n        for ($i = 0; $i <= .1; $i++) {\n            for ($i = 0; $i << .1; $i++) {\n                $a &= $a . $a = \"4294967295\";\n            }\n        }\n    }\n}\n@foo();\n?>\nDONE")).toMatchSnapshot();
  });
});
