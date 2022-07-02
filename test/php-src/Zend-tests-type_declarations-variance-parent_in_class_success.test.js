// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/parent_in_class_success.phpt
  it("Use of parent inside a class that has / has no parent (success cases)", function () {
    expect(parser.parseCode("<?php\n// Legal: A2::parent == P2\nclass P2 {}\nclass A2 extends P2 {\n    public function method(parent $x) {}\n}\nclass B2 extends A2 {\n    public function method(P2 $x) {}\n}\n// Legal: B3::parent == A3 is subclass of A3::parent == P3 in covariant position\nclass P3 {}\nclass A3 extends P3 {\n    public function method($x): parent {}\n}\nclass B3 extends A3 {\n    public function method($x): parent {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
