// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65051.phpt
  it("Bug #65051: count() off by one inside unset()", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $array;\n    public function __destruct() {\n        var_dump(count($this->array[0]));\n        var_dump($this->array[0]);\n    }\n}\n$array = [[new Foo]];\n$array[0][0]->array =& $array;\nunset($array[0][0]);\n?>")).toMatchSnapshot();
  });
});
