// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_isInstantiable_variation.phpt
  it("ReflectionObject::IsInstantiable() - variation - constructors", function () {
    expect(parser.parseCode("<?php\nclass noCtor {\n    public static function reflectionObjectFactory() {\n        return new ReflectionObject(new self);\n    }\n}\nclass publicCtorNew {\n    public function __construct() {}\n    public static function reflectionObjectFactory() {\n        return new ReflectionObject(new self);\n    }\n}\nclass protectedCtorNew {\n    protected function __construct() {}\n    public static function reflectionObjectFactory() {\n        return new ReflectionObject(new self);\n    }\n}\nclass privateCtorNew {\n    private function __construct() {}\n    public static function reflectionObjectFactory() {\n        return new ReflectionObject(new self);\n    }\n}\n$reflectionObjects = array(\n        noCtor::reflectionObjectFactory(),\n        publicCtorNew::reflectionObjectFactory(),\n        protectedCtorNew::reflectionObjectFactory(),\n        privateCtorNew::reflectionObjectFactory(),\n    );\nforeach ($reflectionObjects as $reflectionObject) {\n    $name = $reflectionObject->getName();\n    echo \"Is $name instantiable? \";\n    var_dump($reflectionObject->IsInstantiable());\n}\n?>")).toMatchSnapshot();
  });
});
