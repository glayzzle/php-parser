// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/isset_003.phpt
  it("Testing isset accessing undefined array items and properties", function () {
    expect(parser.parseCode("<?php\n$a = 'foo';\n$b =& $a;\nvar_dump(isset($b));\nvar_dump(isset($a[0], $b[1]));\nvar_dump(isset($a[0]->a));\nvar_dump(isset($c[0][1][2]->a->b->c->d));\nvar_dump(isset(${$a}->{$b->{$c[$d]}}));\nvar_dump(isset($GLOBALS));\nvar_dump(isset($GLOBALS[1]));\nvar_dump(isset($GLOBALS[1]->$GLOBALS));\n?>")).toMatchSnapshot();
  });
});
