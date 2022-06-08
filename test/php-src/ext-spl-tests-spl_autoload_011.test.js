// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_011.phpt
  it("SPL: spl_autoload() and object freed", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $var = 1;\n    public function autoload() {\n        echo \"var:\".$this->var.\"\\n\";\n    }\n    public function __destruct() {\n        echo \"__destruct__\\n\";\n    }\n}\n$a = new A;\n$a->var = 2;\nspl_autoload_register(array($a, 'autoload'));\nunset($a);\nvar_dump(class_exists(\"C\", true));\n?>\n===DONE===")).toMatchSnapshot();
  });
});
