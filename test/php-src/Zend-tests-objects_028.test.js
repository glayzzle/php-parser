// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_028.phpt
  it("Testing 'static::' and 'parent::' in calls", function () {
    expect(parser.parseCode("<?php\nclass bar {\n    public function __call($a, $b) {\n        print \"hello\\n\";\n    }\n}\nclass foo extends bar {\n    public function __construct() {\n        static::bar();\n        parent::bar();\n    }\n}\nnew foo;\n?>")).toMatchSnapshot();
  });
});
