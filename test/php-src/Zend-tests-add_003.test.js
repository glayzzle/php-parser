// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/add_003.phpt
  it("adding arrays to objects", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$o = new stdclass;\n$o->prop = \"value\";\ntry {\n    var_dump($o + $a);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$c = $o + $a;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
