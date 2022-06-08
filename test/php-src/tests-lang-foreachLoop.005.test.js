// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.005.phpt
  it("Foreach loop tests - modifying the array during the loop: special case. Behaviour is good since php 5.2.2.", function () {
    expect(parser.parseCode("<?php\n$a = array(\"original.0\",\"original.1\",\"original.2\");\nforeach ($a as $k=>&$v){\n  $a[$k] = \"changed.$k\";\n  echo \"After changing \\$a directly, \\$v@$k is: $v\\n\";\n}\n//--- Expected output:\n//After changing $a directly, $v@0 is: changed.0\n//After changing $a directly, $v@1 is: changed.1\n//After changing $a directly, $v@2 is: changed.2\n//--- Actual output from php.net before 5.2.2:\n//After changing $a directly, $v@0 is: changed.0\n//After changing $a directly, $v@1 is: original.1\n//After changing $a directly, $v@2 is: original.2\n?>")).toMatchSnapshot();
  });
});
