// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_040.phpt
  it("Closure 040: Rebinding closures, bad arguments", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $x;\n    private static $xs = 10;\n    public function __construct($v) {\n        $this->x = $v;\n    }\n    public function getIncrementor() {\n        return function() { return ++$this->x; };\n    }\n    public function getStaticIncrementor() {\n        return static function() { return ++static::$xs; };\n    }\n}\n$a = new A(20);\n$ca = $a->getIncrementor();\n$cas = $a->getStaticIncrementor();\ntry {\n    $ca->bindTo($a, array());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$cas->bindTo($a, 'A');\n?>")).toMatchSnapshot();
  });
});
