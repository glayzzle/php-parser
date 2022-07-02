// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39990.phpt
  it("Bug #39990 (Cannot \"foreach\" over overloaded properties)", function () {
    expect(parser.parseCode("<?php\n  class Foo {\n    public function __get($name) {\n      return array('Hello', 'World');\n    }\n  }\n  $obj=new Foo();\n  foreach($obj->arr as $value)\n    echo \"$value\\n\";\n?>")).toMatchSnapshot();
  });
});
