// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug68594.phpt
  it("Bug #68545 Use after free vulnerability in unserialize()", function () {
    expect(parser.parseCode("<?php\nfor ($i=4; $i<100; $i++) {\n    $m = new StdClass();\n    $u = array(1);\n    $m->aaa = array(1,2,&$u,4,5);\n    $m->bbb = 1;\n    $m->ccc = &$u;\n    $m->ddd = str_repeat(\"A\", $i);\n    $z = serialize($m);\n    $z = str_replace(\"bbb\", \"aaa\", $z);\n    $y = unserialize($z);\n    $z = serialize($y);\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
