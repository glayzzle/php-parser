// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_vars_006.phpt
  it("get_class_vars(): Testing visibility", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected $a = 1;\n}\nclass B extends A { }\nclass C extends B { }\nvar_dump(get_class_vars('A'));\nvar_dump(get_class_vars('B'));\nvar_dump(get_class_vars('C'));\nprint \"---\\n\";\nclass D extends B {\n    public function __construct() {\n        var_dump(get_class_vars('A'));\n        var_dump(get_class_vars('B'));\n        var_dump(get_class_vars('C'));\n    }\n}\nnew D;\n?>")).toMatchSnapshot();
  });
});
