// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/clone_002.phpt
  it("Testing multiple clone statements", function () {
    expect(parser.parseCode("<?php\n$a = clone clone $b = new stdClass;\nvar_dump($a == $b);\n$c = clone clone clone $b = new stdClass;\nvar_dump($a == $b, $b == $c);\nclass foo { }\n$d = clone $a = $b = new foo;\nvar_dump($a == $d, $b == $d, $c == $a);\n?>")).toMatchSnapshot();
  });
});
