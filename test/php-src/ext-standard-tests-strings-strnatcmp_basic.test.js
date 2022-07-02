// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strnatcmp_basic.phpt
  it("Test strnatcmp() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strnatcmp() : basic functionality ***\\n\";\n$a1 = \"abc1\";\n$b1 = \"abc10\";\n$c1 = \"abc15\";\n$d1 = \"abc2\";\n$a2 = \"ABC1\";\n$b2 = \"ABC10\";\n$c2 = \"ABC15\";\n$d2 = \"ABC2\";\necho \"Less than tests\\n\";\nvar_dump(strnatcmp($a1, $b1));\nvar_dump(strnatcmp($a1, $c1));\nvar_dump(strnatcmp($a1, $d1));\nvar_dump(strnatcmp($b1, $c1));\nvar_dump(strnatcmp($d1, $c1));\nvar_dump(strnatcmp($a1, $b2));\nvar_dump(strnatcmp($a1, $c2));\nvar_dump(strnatcmp($a1, $d2));\nvar_dump(strnatcmp($b1, $c2));\nvar_dump(strnatcmp($d1, $c2));\necho \"Equal too tests\\n\";\nvar_dump(strnatcmp($b1, $b1));\nvar_dump(strnatcmp($b1, $b2));\necho \"Greater than tests\\n\";\nvar_dump(strnatcmp($b1, $a1));\nvar_dump(strnatcmp($c1, $a1));\nvar_dump(strnatcmp($d1, $a1));\nvar_dump(strnatcmp($c1, $b1));\nvar_dump(strnatcmp($c1, $d1));\nvar_dump(strnatcmp($b1, $a2));\nvar_dump(strnatcmp($c1, $a2));\nvar_dump(strnatcmp($d1, $a2));\nvar_dump(strnatcmp($c1, $b2));\nvar_dump(strnatcmp($c1, $d2));\n?>")).toMatchSnapshot();
  });
});
