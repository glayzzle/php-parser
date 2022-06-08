// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/add_001.phpt
  it("adding arrays", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$b = array(\"str\", \"here\");\n$c = $a + $b;\nvar_dump($c);\n$a = array(1,2,3);\n$b = array(1,2,4);\n$c = $a + $b;\nvar_dump($c);\n$a = array(\"a\"=>\"aaa\",2,3);\n$b = array(1,2,\"a\"=>\"bbbbbb\");\n$c = $a + $b;\nvar_dump($c);\n$a += $b;\nvar_dump($c);\n$a += $a;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
