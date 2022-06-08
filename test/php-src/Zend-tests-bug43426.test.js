// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43426.phpt
  it("Bug #43426 (crash on nested call_user_func calls)", function () {
    expect(parser.parseCode("<?php\n$c = 1; // doesn't matter\ncall_user_func(\"foo2\", $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c,\n$c,\n $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c, $c);\nfunction foo2($d) {}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
