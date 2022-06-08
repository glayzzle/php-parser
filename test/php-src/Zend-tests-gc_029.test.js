// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_029.phpt
  it("GC 029: GC and destructors", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar;\n    public $x = array(1,2,3);\n    function __destruct() {\n        if ($this->bar !== null) {\n            $this->x = null;\n            unset($this->bar);\n        }\n    }\n}\nclass Bar {\n    public $foo;\n        function __destruct() {\n                if ($this->foo !== null) {\n                        unset($this->foo);\n                }\n        }\n}\n$foo = new Foo();\n$bar = new Bar();\n$foo->bar = $bar;\n$bar->foo = $foo;\nunset($foo);\nunset($bar);\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
