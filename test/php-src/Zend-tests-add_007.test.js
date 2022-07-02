// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/add_007.phpt
  it("adding strings to arrays", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$s1 = \"some string\";\ntry {\n    var_dump($a + $s1);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$c = $a + $s1;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
