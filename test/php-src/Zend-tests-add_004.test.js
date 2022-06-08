// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/add_004.phpt
  it("adding numbers to arrays", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\ntry {\n    var_dump($a + 5);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$c = $a + 5;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
