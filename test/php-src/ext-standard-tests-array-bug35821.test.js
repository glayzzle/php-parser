// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug35821.phpt
  it("Bug #35821 (array_map() segfaults when exception is throwed from the callback)", function () {
    expect(parser.parseCode("<?php\nclass Element\n{\n    public function ThrowException ()\n    {\n        throw new Exception();\n    }\n    public static function CallBack(Element $elem)\n    {\n        $elem->ThrowException();\n    }\n}\n$arr = array(new Element(), new Element(), new Element());\narray_map(array('Element', 'CallBack'), $arr);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
