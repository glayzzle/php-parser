// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_024.phpt
  it("PRE_INC/DEC numeric string", function () {
    expect(parser.parseCode("<?php\nfunction test($b) {\n    $a = \"0\";\n    $i = 0;\n    while (is_numeric($a)) {\n        $a .= $b;\n        $a--;\n        $i .= $a;\n        $i++;\n    }\n    var_dump($a, $i);\n}\ntest(\"0\");\n?>")).toMatchSnapshot();
  });
});
