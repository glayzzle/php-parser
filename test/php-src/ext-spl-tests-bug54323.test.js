// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug54323.phpt
  it("Bug #54323 (Accessing unset()'ed ArrayObject's property causes crash)", function () {
    expect(parser.parseCode("<?php\nclass C {\n        public $prop = 'C::prop.orig';\n}\nclass MyArrayObject extends ArrayObject {\n}\n$c = new C;\n$ao = new MyArrayObject($c);\ntestAccess($c, $ao);\nfunction testAccess($c, $ao) {\n        foreach ($ao as $key=>$value) {\n        }\n        unset($ao['prop']);\n        var_dump($c->prop, $ao['prop']);\n}\n?>")).toMatchSnapshot();
  });
});
