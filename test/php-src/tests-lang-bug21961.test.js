// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug21961.phpt
  it("Bug #21961 (get_parent_class() segfault)", function () {
    expect(parser.parseCode("<?php\nclass man\n{\n    public $name, $bars;\n    function __construct()\n    {\n        $this->name = 'Mr. X';\n        $this->bars = array();\n    }\n    function getdrunk($where)\n    {\n        $this->bars[] = new bar($where);\n    }\n    function getName()\n    {\n        return $this->name;\n    }\n}\nclass bar extends man\n{\n    public $name;\n    function __construct($w)\n    {\n        $this->name = $w;\n    }\n    function getName()\n    {\n        return $this->name;\n    }\n    function whosdrunk()\n    {\n        $who = get_parent_class($this);\n        if($who == NULL)\n        {\n            return 'nobody';\n        }\n        return eval(\"return \".$who.'::getName();');\n    }\n}\n$x = new man;\n$x->getdrunk('The old Tavern');\nvar_dump($x->bars[0]->whosdrunk());\n?>")).toMatchSnapshot();
  });
});
