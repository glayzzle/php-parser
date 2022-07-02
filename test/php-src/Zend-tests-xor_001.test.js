// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/xor_001.phpt
  it("XORing arrays", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$b = array();\ntry {\n    $c = $a ^ $b;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
