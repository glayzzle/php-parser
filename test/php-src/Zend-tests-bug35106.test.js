// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35106.phpt
  it("Bug #35106 (nested foreach fails when array variable has a reference)", function () {
    expect(parser.parseCode("<?php\n$a=array(\"1\",\"2\");\n$b=&$a;\nforeach($a as $i){\n    echo $i;\n    foreach($a as $p);\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
