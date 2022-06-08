// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug69970.phpt
  it("Bug #69970 (Use-after-free vulnerability in spl_recursive_it_move_forward_ex())", function () {
    expect(parser.parseCode("<?php\n$count = 10;\nclass RecursiveArrayIteratorIterator extends RecursiveIteratorIterator {\n  function rewind(): void {\n    echo \"dummy\\n\";\n  }\n  function endChildren(): void {\n      global $count;\n      echo $this->getDepth();\n      if (--$count > 0) {\n          // Trigger use-after-free\n          parent::rewind();\n      }\n  }\n}\n$arr = array(\"a\", array(\"ba\", array(\"bba\", \"bbb\")));\n$obj = new RecursiveArrayIterator($arr);\n$rit = new RecursiveArrayIteratorIterator($obj);\nforeach ($rit as $k => $v) {\n  echo ($rit->getDepth()) . \"$k=>$v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
