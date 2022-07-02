// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/promotion.phpt
  it("Promoted readonly property", function () {
    expect(parser.parseCode("<?php\nclass Point {\n    public function __construct(\n        public readonly float $x = 0.0,\n        public readonly float $y = 0.0,\n        public readonly float $z = 0.0,\n    ) {}\n}\nvar_dump(new Point);\n$point = new Point(1.0, 2.0, 3.0);\ntry {\n    $point->x = 4.0;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($point);\n?>")).toMatchSnapshot();
  });
});
