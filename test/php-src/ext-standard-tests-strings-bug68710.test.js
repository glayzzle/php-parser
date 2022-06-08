// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug68710.phpt
  it("Bug #68710 Use after free vulnerability in unserialize() (bypassing the\nCVE-2014-8142 fix)", function () {
    expect(parser.parseCode("<?php\nfor ($i=4; $i<100; $i++) {\n    $m = new StdClass();\n    $u = array(1);\n    $m->aaa = array(1,2,&$u,4,5);\n    $m->bbb = 1;\n    $m->ccc = &$u;\n    $m->ddd = str_repeat(\"A\", $i);\n    $z = serialize($m);\n    $z = str_replace(\"aaa\", \"123\", $z);\n    $z = str_replace(\"bbb\", \"123\", $z);\n    $y = unserialize($z);\n    $z = serialize($y);\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
