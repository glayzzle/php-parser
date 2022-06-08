// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gh7958.phpt
  it("GH-7958 (Nested CallbackFilterIterator is leaking memory)", function () {
    expect(parser.parseCode("<?php\nclass Action\n{\n    public \\Iterator $iterator;\n    public function __construct(array $data)\n    {\n        $this->iterator = new ArrayIterator($data);\n        echo '-- c ' . spl_object_id($this) . \"\\n\";\n    }\n    public function __destruct()\n    {\n        echo '-- d ' . spl_object_id($this) . \"\\n\";\n    }\n    public function filter()\n    {\n        $this->iterator = new \\CallbackFilterIterator($this->iterator, fn() => true);\n        $this->iterator->rewind();\n    }\n}\n$action = new Action(['a', 'b']);\n$action->filter();\n$action->filter();\nprint_r(iterator_to_array($action->iterator));\n$action = null;\ngc_collect_cycles();\necho \"==DONE==\\n\";\n?>")).toMatchSnapshot();
  });
});
