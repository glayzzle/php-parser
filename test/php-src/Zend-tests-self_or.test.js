// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/self_or.phpt
  it("ORing strings", function () {
    expect(parser.parseCode("<?php\n$s = \"123\";\n$s1 = \"test\";\n$s2 = \"45345some\";\n$s3 = str_repeat(\"f\", 1);\n$s4 = str_repeat(\"f\", 2);\n$s |= 22;\nvar_dump($s);\ntry {\n    $s1 |= 11;\n    var_dump($s1);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$s2 |= 33;\nvar_dump($s2);\n$s3 |= \" \";\nvar_dump($s3);\n$s4 |= \"  \";\nvar_dump($s4);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
