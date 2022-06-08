// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64239_1.phpt
  it("Bug #64239 (get_class_methods() changed behavior)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    use T2 { t2method as Bmethod; }\n}\nclass B extends A {\n}\ntrait T2 {\n    public function t2method() {\n    }\n}\nprint_r(get_class_methods(\"A\"));\nprint_r(get_class_methods(\"B\"));\n?>")).toMatchSnapshot();
  });
});
