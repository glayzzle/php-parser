// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/add_002.phpt
  it("adding objects to arrays", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$o = new stdclass;\n$o->prop = \"value\";\ntry {\n    var_dump($a + $o);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$c = $a + $o;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
