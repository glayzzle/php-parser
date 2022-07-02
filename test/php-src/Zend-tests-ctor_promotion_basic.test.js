// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_basic.phpt
  it("Constructor promotion (basic example)", function () {
    expect(parser.parseCode("<?php\nclass Point {\n    public function __construct(public int $x, public int $y, public int $z) {}\n}\n$point = new Point(1, 2, 3);\n// Check that properties really are typed.\ntry {\n    $point->x = \"foo\";\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
