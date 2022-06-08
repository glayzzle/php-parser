// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53748.phpt
  it("Bug #53748 (Using traits lead to a segmentation fault)", function () {
    expect(parser.parseCode("<?php\ntrait Singleton {\n  protected static $instances=array();\n  abstract protected function __construct($config);\n  public static function getInstance($config) {\n    if (!isset(self::$instances[$serialize = serialize($config)])) {\n      self::$instances[$serialize] = new self($config);\n    }\n    return self::$instances[$serialize];\n  }\n}\nclass MyHelloWorld {\n  use Singleton;\n  public function __construct($config)\n  {\n    var_dump( $config);\n  }\n}\n$o= myHelloWorld::getInstance(1);\n$o= myHelloWorld::getInstance(1);\n$o= myHelloWorld::getInstance(2);\n$o= myHelloWorld::getInstance(array(1=>2));\n$o= myHelloWorld::getInstance(array(1=>2));\n?>")).toMatchSnapshot();
  });
});
