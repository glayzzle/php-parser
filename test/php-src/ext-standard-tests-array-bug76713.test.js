// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug76713.phpt
  it("Bug #76713 (Segmentation fault caused by property corruption)", function () {
    expect(parser.parseCode("<?php\nfunction test($obj) {\n    return array_column(array($obj), \"prop\");\n}\n$obj = new Stdclass();\n$obj->prop = str_pad(\"a\", 10, 'a');\ntest($obj);\ntest($obj);\ntest($obj);\nvar_dump($obj->prop);\nclass C {\n    public $name;\n    public function __get($name) {\n        return $this->name;\n    }\n}\n$obj = new C;\n$obj->name = str_pad(\"b\", 10, 'b');\ntest($obj);\ntest($obj);\ntest($obj);\nvar_dump($obj->prop);\n?>")).toMatchSnapshot();
  });
});
