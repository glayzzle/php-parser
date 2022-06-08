// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72177_2.phpt
  it("Bug #72177 Scope issue in __destruct after ReflectionProperty::setValue()", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    private $bar = 'bar';\n    public function __construct()\n    {\n        unset($this->bar);\n    }\n}\nclass Bar extends Foo\n{\n    private $baz = 'baz';\n    private static $tab = 'tab';\n    public function __get(string $name)\n    {\n        var_dump($this->baz);\n        var_dump(self::$tab);\n        return $name;\n    }\n}\n$r = new ReflectionProperty(Foo::class, 'bar');\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
