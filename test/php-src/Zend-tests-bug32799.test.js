// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32799.phpt
  it("Bug #32799 (crash: calling the corresponding global var during the destruct)", function () {
    expect(parser.parseCode("<?php\nclass test{\n  public $c=1;\n  function __destruct (){\n    if (!isset($GLOBALS['p'])) {\n        echo \"NULL\\n\";\n    } else {\n        $GLOBALS['p']->c++; // no warning\n        print $GLOBALS['p']->c.\"\\n\"; // segfault\n        var_dump($GLOBALS['p']);\n    }\n  }\n}\n$p=new test;\n$p=null; //destroy the object by a new assignment (segfault)\n?>")).toMatchSnapshot();
  });
});
