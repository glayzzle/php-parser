// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreach_with_object_001.phpt
  it("foreach() with foreach($o->mthd()->arr)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n   public $a = array(1,2,3,4,5); // removed, crash too\n   function c() {\n      return new Test();\n   }\n}\n$obj = new Test();\nforeach ($obj->c()->a as $value) {\n    print \"$value\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
