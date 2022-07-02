// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37046.phpt
  it("Bug #37046 (foreach breaks static scope)", function () {
    expect(parser.parseCode("<?php\nfunction s() {\n  static $storage = array(array('x', 'y'));\n  return $storage[0];\n}\nforeach (s() as $k => $function) {\n  echo \"op1 $k\\n\";\n  if ($k == 0) {\n    foreach (s() as $k => $function) {\n      echo \"op2 $k\\n\";\n    }\n  }\n}\n?>")).toMatchSnapshot();
  });
});
