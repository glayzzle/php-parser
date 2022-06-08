// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/traits005.phpt
  it("ReflectionClass::getTraitAlias", function () {
    expect(parser.parseCode("<?php\ntrait T1 { function m1() { } function m2() { } }\nclass C1 { }\nclass C2 { use T1; }\nclass C3 { use T1 { m1 as a1; } }\nclass C4 { use T1 { m1 as a1; m2 as a2; } }\nfor ($c = \"C1\"; $c <= \"C4\"; $c++) {\n    echo \"class $c:\\n\";\n    $r = new ReflectionClass($c);\n    var_dump($r->getTraitAliases());\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
