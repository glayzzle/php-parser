// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug74058.phpt
  it("Bug #74058 (ArrayObject can not notice changes)", function () {
    expect(parser.parseCode("<?php\nclass MyArrayObject extends ArrayObject\n{\n    public function __construct($input = [])\n    {\n        parent::__construct($input, ArrayObject::ARRAY_AS_PROPS);\n    }\n    public function offsetSet($x, $v): void\n    {\n        echo \"offsetSet('{$x}')\\n\";\n        parent::offsetSet($x, $v);\n    }\n    public function offsetGet($x): mixed\n    {\n        echo \"offsetGet('{$x}')\\n\";\n        return parent::offsetGet($x);\n    }\n}\nclass MyArray extends ArrayObject\n{\n    public function __construct($input = [])\n    {\n        parent::__construct($input);\n    }\n    public function offsetSet($x, $v): void\n    {\n        echo \"offsetSet('{$x}')\\n\";\n        parent::offsetSet($x, $v);\n    }\n    public function offsetGet($x): mixed\n    {\n        echo \"offsetGet('{$x}')\\n\";\n        return parent::offsetGet($x);\n    }\n}\n$x = new MyArrayObject;\n$x->a1 = new stdClass();\nvar_dump($x->a1);\n$x->a1->b = 'some value';\nvar_dump($x->a1);\n$y = new MyArray();\n$y['a2'] = new stdClass();\nvar_dump($y['a2']);\n$y['a2']->b = 'some value';\nvar_dump($y['a2']);\n?>")).toMatchSnapshot();
  });
});
