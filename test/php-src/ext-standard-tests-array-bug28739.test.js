// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug28739.phpt
  it("Bug #28739 (*diff() and *intersect() not clearing the fci cache before work)", function () {
    expect(parser.parseCode("<?php\nclass p {\n   public $x;\n   function __construct($x){$this->x=$x;}\n}\nfunction a($a, $b){var_dump(__FUNCTION__);return $a->x - $b->x;}\nfunction b($a, $b){var_dump(__FUNCTION__);return $a->x - $b->x;}\n$p1 = array(new p(2), new p(1), new p(0));\n$p2 = array(new p(0), new p(2), new p(3));\nuasort($p1, 'a');\nprint_r($p1);\necho \"Now diffing:\\n\";\nprint_r(array_udiff($p1,$p2, 'b'));\n?>")).toMatchSnapshot();
  });
});
