// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_split-compat-01.phpt
  it("mb_split() compat test 1", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/009.phpt) */\n    $a=mb_split(\"[[:space:]]\",\"this is\ta\ntest\");\n    echo count($a) . \"\\n\";\n    for ($i = 0; $i < count($a); $i++) {\n          echo $a[$i] . \"\\n\";\n        }\n?>")).toMatchSnapshot();
  });
});
