// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_010.phpt
  it("Nested foreach by value over object and object modification with resize", function () {
    expect(parser.parseCode("<?php\n$o = (object)['a'=>0, 'b'=>1, 'c'=>2, 'd'=>3, 'e'=>4, 'f'=>5, 'g'=>6, 'h'=>7];\nunset($o->a, $o->b, $o->c, $o->d);\nforeach ($o as $v1) {\n    foreach ($o as $v2) {\n        echo \"$v1-$v2\\n\";\n        if ($v1 == 5 && $v2 == 6) {\n            $o->i = 8;\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
