// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_named_params.phpt
  it("Named params in new in const expr", function () {
    expect(parser.parseCode("<?php\nclass Vec {\n    public function __construct(public float $x, public float $y, public float $z) {}\n}\nstatic $a = new Vec(x: 0.0, y: 1.0, z: 2.0);\nvar_dump($a);\nstatic $b = new Vec(z: 0.0, y: 1.0, x: 2.0);\nvar_dump($b);\nstatic $c = new Vec(0.0, z: 1.0, y: 2.0);\nvar_dump($c);\ntry {\n    eval('static $d = new Vec(x: 0.0, x: 1.0);');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
