// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_018.phpt
  it("ZE2 Late Static Binding and Singleton", function () {
    expect(parser.parseCode("<?php\nabstract class Singleton\n{\n    static private $instances = array();\n    static private $nextInstanceId = 0;\n    private $instanceId = NULL;\n    static final public function getInstance()\n    {\n        $caller = get_called_class();\n        if (!isset(self::$instances[$caller])) {\n            self::$instances[$caller] = new $caller;\n            self::$instances[$caller]->instanceId = self::$nextInstanceId++;\n        }\n        return self::$instances[$caller];\n    }\n    public final function getInstanceId()\n    {\n        return $this->instanceId;\n    }\n    public final function identify()\n    {\n        var_dump($this);\n    }\n}\nclass Foo extends Singleton {\n}\nclass Bar extends Singleton {\n}\nclass Baz extends Bar {\n}\n$u = Foo::getInstance();\n$v = Bar::getInstance();\n$w = Baz::getInstance();\n$u->identify();\n$v->identify();\n$w->identify();\n$x = Foo::getInstance();\n$y = Bar::getInstance();\n$z = Baz::getInstance();\n$u->identify();\n$v->identify();\n$w->identify();\n$x->identify();\n$y->identify();\n$z->identify();\n?>")).toMatchSnapshot();
  });
});
