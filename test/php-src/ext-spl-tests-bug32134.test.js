// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug32134.phpt
  it("Bug #32134 (Overloading offsetGet/offsetSet)", function () {
    expect(parser.parseCode("<?php\nclass myArray extends ArrayIterator\n{\n    public function __construct($array = array())\n    {\n        parent::__construct($array);\n    }\n    public function offsetGet($index): mixed\n    {\n        static $i = 0;\n        echo __METHOD__ . \"($index)\\n\";\n        if (++$i > 3) exit(1);\n        return parent::offsetGet($index);\n    }\n    public function offsetSet($index, $newval): void\n    {\n        echo __METHOD__ . \"($index,$newval)\\n\";\n        parent::offsetSet($index, $newval);\n    }\n}\n$myArray = new myArray();\n$myArray->offsetSet('one', 'one');\nvar_dump($myArray->offsetGet('one'));\n$myArray['two'] = 'two';\nvar_dump($myArray['two']);\n?>")).toMatchSnapshot();
  });
});
