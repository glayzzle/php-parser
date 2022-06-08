// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60139.phpt
  it("Bug #60139 (Anonymous functions create cycles not detected by the GC)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $x;\n    public function __construct() {\n        $this->x = function() {};\n    }\n}\nclass Bar {\n    public $x;\n    public function __construct() {\n        $self = $this;\n        $this->x = function() use ($self) {};\n    }\n}\ngc_collect_cycles();\nnew Foo;\nvar_dump(gc_collect_cycles());\nnew Bar;\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
