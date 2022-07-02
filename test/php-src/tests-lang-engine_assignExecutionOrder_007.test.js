// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/engine_assignExecutionOrder_007.phpt
  it("Check key execution order with new.", function () {
    expect(parser.parseCode("<?php\n$a[2][3] = 'stdClass';\n$a[$i=0][++$i] = new $a[++$i][++$i];\nprint_r($a);\n$o = new stdClass;\n$o->a = new $a[$i=2][++$i];\n$o->a->b = new $a[$i=2][++$i];\nprint_r($o);\n?>")).toMatchSnapshot();
  });
});
