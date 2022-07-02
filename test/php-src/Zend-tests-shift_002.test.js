// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/shift_002.phpt
  it("shifting strings right", function () {
    expect(parser.parseCode("<?php\n$s = \"123\";\n$s1 = \"test\";\n$s2 = \"45345some\";\n$s >>= 2;\nvar_dump($s);\ntry {\n    $s1 >>= 1;\n    var_dump($s1);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$s2 >>= 3;\nvar_dump($s2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
