// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40833.phpt
  it("Bug #40833 (Crash when using unset() on an ArrayAccess object retrieved via __get)", function () {
    expect(parser.parseCode("<?php\n    class entity\n    {\n        private $data;\n        private $modified;\n        function __get($name)\n        {\n            if ( isset($this->data[$name]) )\n                return $this->data[$name];\n            else\n                return $this->data[$name] = new set($this);\n        }\n        function __set($name, $value)\n        {\n            $this->modified[$name] = $value;\n        }\n    }\n    class set implements ArrayAccess\n    {\n        private $entity;\n        function __construct($entity)\n        {\n            $this->entity = $entity;\n            $this->entity->whatever = $this;\n        }\n        function clear() {\n            $this->entity->whatever = null;\n        }\n        function offsetUnset($offset): void\n        {\n            $this->clear();\n//\t\t\t$this->entity->{$this->name} = null;\n        }\n        function offsetSet($offset, $value): void\n        {\n        }\n        function offsetGet($offset): mixed\n        {\n            return 'Bogus ';\n        }\n        function offsetExists($offset): bool\n        {\n        }\n    }\n    $entity = new entity();\n    echo($entity->whatever[0]);\n    //This will crash\n//\t$entity->whatever->clear();\n    unset($entity->whatever[0]);\n    //This will not crash (comment previous & uncomment this to test\n//\t$test = $entity->whatever; unset($test[0]);\n    echo($entity->whatever[0]);\n    echo \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
