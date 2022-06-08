// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/sub_001.phpt
  it("subtracting arrays", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$b = array(1);\ntry {\n    var_dump($a - $b);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$c = $a - $b;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
