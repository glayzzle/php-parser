// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/traits004.phpt
  it("ReflectionClass::getTraits() and ReflectionClass::getTraitNames", function () {
    expect(parser.parseCode("<?php\ntrait T1 { }\ntrait T2 { }\nclass C1 { }\nclass C2 { use T1; }\nclass C3 { use T1; use T2; }\nfor ($c = \"C1\"; $c <= \"C3\"; $c++) {\n    echo \"class $c:\\n\";\n    $r = new ReflectionClass($c);\n    var_dump($r->getTraitNames());\n    var_dump($r->getTraits());\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
