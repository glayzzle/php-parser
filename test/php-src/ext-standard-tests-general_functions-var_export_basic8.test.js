// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_basic8.phpt
  it("var_export(): simple test with arrays and objects", function () {
    expect(parser.parseCode("<?php\necho \"\\n\\n-- Var export on a simple  object --\\n\";\n$o1 = new stdclass;\n$o1->p = '22';\n$o2 = new stdclass;\n$o2->a = 1;\n$o2->b = array('k'=>2);\n$o2->x = $o1;\nvar_export($o2);\necho \"\\n\\n-- Var export on an simple array --\\n\";\n$a = array(1,2,3,4);\nvar_export($a);\necho \"\\n\\n-- Var export on an nested array --\\n\";\n$a = array('one' => 'first');\n$b = array('foo' => $a, 'bar' => $o2);\nvar_export($b);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
