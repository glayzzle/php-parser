// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/inheritance.phpt
  it("Classes inheritance test", function () {
    expect(parser.parseCode("<?php\n/* Inheritance test.  Pretty nifty if I do say so myself! */\nclass foo {\n  public $a;\n  public $b;\n  function display() {\n    echo \"This is class foo\\n\";\n    echo \"a = \".$this->a.\"\\n\";\n    echo \"b = \".$this->b.\"\\n\";\n  }\n  function mul() {\n    return $this->a*$this->b;\n  }\n};\nclass bar extends foo {\n  public $c;\n  function display() {  /* alternative display function for class bar */\n    echo \"This is class bar\\n\";\n    echo \"a = \".$this->a.\"\\n\";\n    echo \"b = \".$this->b.\"\\n\";\n    echo \"c = \".$this->c.\"\\n\";\n  }\n};\n$foo1 = new foo;\n$foo1->a = 2;\n$foo1->b = 5;\n$foo1->display();\necho $foo1->mul().\"\\n\";\necho \"-----\\n\";\n$bar1 = new bar;\n$bar1->a = 4;\n$bar1->b = 3;\n$bar1->c = 12;\n$bar1->display();\necho $bar1->mul().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
