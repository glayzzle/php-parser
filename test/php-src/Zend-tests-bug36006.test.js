// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug36006.phpt
  it("Bug #36006 (Problem with $this in __destruct())", function () {
    expect(parser.parseCode("<?php\nclass Person {\n    public $dad;\n    public function __destruct() {\n        $this->dad = null; /* no segfault if this is commented out */\n    }\n}\nclass Dad extends Person {\n    public $son;\n    public function __construct() {\n        $this->son = new Person;\n        $this->son->dad = $this; /* no segfault if this is commented out */\n    }\n    public function __destruct() {\n        $this->son = null;\n        parent::__destruct(); /* segfault here */\n    }\n}\n$o = new Dad;\nunset($o);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
