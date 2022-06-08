// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_newInstanceWithoutConstructor.phpt
  it("ReflectionClass::newInstanceWithoutConstructor()", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function __construct()\n    {\n        print __METHOD__;\n    }\n}\n$class = new ReflectionClass('Foo');\nvar_dump($class->newInstanceWithoutConstructor());\n$class = new ReflectionClass('StdClass');\nvar_dump($class->newInstanceWithoutConstructor());\n$class = new ReflectionClass('DateTime');\nvar_dump($class->newInstanceWithoutConstructor());\n$class = new ReflectionClass('Generator');\ntry {\n    var_dump($class->newInstanceWithoutConstructor());\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nfinal class Bar extends ArrayObject {\n}\n$class = new ReflectionClass('Bar');\nvar_dump($class->newInstanceWithoutConstructor());\n?>")).toMatchSnapshot();
  });
});
