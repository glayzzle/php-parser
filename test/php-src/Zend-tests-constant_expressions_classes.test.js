// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_classes.phpt
  it("Constant scalar expressions with autoloading and classes", function () {
    expect(parser.parseCode("<?php\n# This test validates that autoloading works for common const expression (AST) use cases\n$classlist = [\n  'A'=> 'class A { const HW = \"this is A\"; }',\n  'B'=> 'class B extends A { const HW = parent::HW.\" extended by B\"; }',\n  'space1\\C' => 'namespace space1; class C { const HW = \"this is space1\\C\"; }',\n  'D' => 'class D  { const HW = \\space1\\C::HW.\" extended by D\"; }',\n  'trE' => 'trait trE { public static function getHW() { return parent::HW; } }',\n  'E' => 'class E extends B { use trE; }',\n  'F' => 'class F { const XX = \"this is F\"; }',\n  'G' => 'class G extends F { const XX = parent::XX.\" extended by G\"; public static function get_me($x = \"got \".self::XX) { return $x; } }',\n];\nspl_autoload_register(function ($class) use ($classlist) {\n    if (isset($classlist[$class])) {\n        eval($classlist[$class]);\n    } else {\n        die(\"Cannot autoload $class\\n\");\n    }\n});\nprintf(\"B::HW = %s\\n\", B::HW);\nprintf(\"D::HW = %s\\n\", D::HW);\nprintf(\"E::getHW() = %s\\n\", E::getHW());\nprintf(\"G::get_me() = %s\\n\", G::get_me());\n?>")).toMatchSnapshot();
  });
});
