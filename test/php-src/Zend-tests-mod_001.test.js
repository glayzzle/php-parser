// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/mod_001.phpt
  it("modulus by zero", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$b = array();\ntry {\n    $c = $a % $b;\n    var_dump($c);\n} catch (TypeError $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
