// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_pretty_print2.phpt
  it("json_encode() with JSON_PRETTY_PRINT on declared properties", function () {
    expect(parser.parseCode("<?php\nclass MyClass {\n    public $x;\n    public $y;\n    public function __construct($x = 123, $y = []) {\n        $this->x = $x;\n        $this->y = $y;\n    }\n}\nclass HasNoProperties {}\necho json_encode(new HasNoProperties()), \"\\n\";\necho json_encode(new HasNoProperties(), JSON_PRETTY_PRINT), \"\\n\";\necho json_encode(new MyClass()), \"\\n\";\necho json_encode(new MyClass(), JSON_PRETTY_PRINT), \"\\n\";\n$obj = new MyClass();\n$obj->dynamic = new MyClass(null, []);\necho json_encode($obj), \"\\n\";\necho json_encode($obj, JSON_PRETTY_PRINT), \"\\n\";\n$obj = new MyClass();\nunset($obj->y);\necho json_encode($obj), \"\\n\";\necho json_encode($obj, JSON_PRETTY_PRINT), \"\\n\";\nunset($obj->x);\necho json_encode($obj), \"\\n\";\necho json_encode($obj, JSON_PRETTY_PRINT), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
