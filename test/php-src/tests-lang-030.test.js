// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/030.phpt
  it("$this in constructor test", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function __construct($name) {\n        $GLOBALS['List']= &$this;\n        $this->Name = $name;\n        $GLOBALS['List']->echoName();\n    }\n    function echoName() {\n        $GLOBALS['names'][]=$this->Name;\n    }\n}\nfunction &foo2(&$foo) {\n    return $foo;\n}\n$bar1 =new foo('constructor');\n$bar1->Name = 'outside';\n$bar1->echoName();\n$List->echoName();\n$foo = new foo('constructor');\n$bar1 =& foo2($foo);\n$bar1->Name = 'outside';\n$bar1->echoName();\n$List->echoName();\nprint ($names==array('constructor','outside','outside','constructor','outside','outside')) ? 'success':'failure';\n?>")).toMatchSnapshot();
  });
});
