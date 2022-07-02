// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32596.phpt
  it("Bug #32596 (Segfault/Memory Leak by getClass (etc) in __destruct)", function () {
    expect(parser.parseCode("<?php\nclass BUG {\n  public $error = \"please fix this thing, it wasted a nice part of my life!\\n\";\n  static function instance() {return new BUG();}\n  function __destruct()\n  {\n    $c=get_class($this); unset($c);\n    echo get_class($this) .\"\\n\";\n    if(defined('DEBUG_'.__CLASS__)){}\n    $c=get_class($this); //memory leak only\n    echo $this->error;\n  }\n}\nBUG::instance()->error;\necho \"this is still executed\\n\";\n?>")).toMatchSnapshot();
  });
});
