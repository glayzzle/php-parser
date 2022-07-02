// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_basic_004.phpt
  it("Test properties with array default values using class constants as keys and values.", function () {
    expect(parser.parseCode("<?php\n  class X\n  {\n      // Static and instance array using class constants\n      public static $sa_x = array(B::KEY => B::VALUE);\n      public $a_x = array(B::KEY => B::VALUE);\n  }\n  class B\n  {\n      const KEY = \"key\";\n      const VALUE = \"value\";\n      // Static and instance array using class constants with self\n      public static $sa_b = array(self::KEY => self::VALUE);\n      public $a_b = array(self::KEY => self::VALUE);\n  }\n  class C extends B\n  {\n      // Static and instance array using class constants with parent\n      public static $sa_c_parent = array(parent::KEY => parent::VALUE);\n      public $a_c_parent = array(parent::KEY => parent::VALUE);\n      // Static and instance array using class constants with self (constants should be inherited)\n      public static $sa_c_self = array(self::KEY => self::VALUE);\n      public $a_c_self = array(self::KEY => self::VALUE);\n      // Should also include inherited properties from B.\n  }\n  echo \"\\nStatic properties:\\n\";\n  var_dump(X::$sa_x, B::$sa_b, C::$sa_b, C::$sa_c_parent, C::$sa_c_self);\n  echo \"\\nInstance properties:\\n\";\n  $x = new x;\n  $b = new B;\n  $c = new C;\n  var_dump($x, $b, $c);\n?>")).toMatchSnapshot();
  });
});
