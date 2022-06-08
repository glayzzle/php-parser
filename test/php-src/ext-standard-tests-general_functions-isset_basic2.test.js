// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/isset_basic2.phpt
  it("Test isset() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nclass foo {}\necho \"*** Testing isset() : basic functionality ***\\n\";\n$i = 10;\n$f = 10.5;\n$s = \"Hello\";\n$b = true;\n$n = NULL;\necho \"Test multiple scalar variables in a group\\n\";\nvar_dump(isset($i, $f, $s, $b));\nvar_dump(isset($i, $f, $s, $b, $n));\necho \"Unset a few\\n\";\nunset($i, $b);\necho \"Test again\\n\";\nvar_dump(isset($i, $f, $s, $b));\necho \"\\n\\nArray test:\\n\";\n$arr = array();\nvar_dump(isset($var));\nvar_dump(isset($var[1]));\nvar_dump(isset($var, $var[1]));\necho \"..now set\\n\";\n$var[1] = 10;\nvar_dump(isset($var));\nvar_dump(isset($var[1]));\nvar_dump(isset($var, $var[1]));\n?>")).toMatchSnapshot();
  });
});
