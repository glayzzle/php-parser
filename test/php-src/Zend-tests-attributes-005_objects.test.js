// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/005_objects.phpt
  it("Attributes can be converted into objects.", function () {
    expect(parser.parseCode("<?php\n#[Attribute(Attribute::TARGET_FUNCTION)]\nclass A1\n{\n    public string $name;\n    public int $ttl;\n    public function __construct(string $name, int $ttl = 50)\n    {\n        $this->name = $name;\n        $this->ttl = $ttl;\n    }\n}\n$ref = new \\ReflectionFunction(#[A1('test')] function () { });\nforeach ($ref->getAttributes() as $attr) {\n    $obj = $attr->newInstance();\n    var_dump(get_class($obj), $obj->name, $obj->ttl);\n}\necho \"\\n\";\n$ref = new \\ReflectionFunction(#[A1] function () { });\ntry {\n    $ref->getAttributes()[0]->newInstance();\n} catch (\\ArgumentCountError $e) {\n    var_dump('ERROR 1', $e->getMessage());\n}\necho \"\\n\";\n$ref = new \\ReflectionFunction(#[A1([])] function () { });\ntry {\n    $ref->getAttributes()[0]->newInstance();\n} catch (\\TypeError $e) {\n    var_dump('ERROR 2', $e->getMessage());\n}\necho \"\\n\";\n$ref = new \\ReflectionFunction(#[A2] function () { });\ntry {\n    $ref->getAttributes()[0]->newInstance();\n} catch (\\Error $e) {\n    var_dump('ERROR 3', $e->getMessage());\n}\necho \"\\n\";\n#[Attribute]\nclass A3\n{\n    private function __construct() { }\n}\n$ref = new \\ReflectionFunction(#[A3] function () { });\ntry {\n    $ref->getAttributes()[0]->newInstance();\n} catch (\\Error $e) {\n    var_dump('ERROR 4', $e->getMessage());\n}\necho \"\\n\";\n#[Attribute]\nclass A4 { }\n$ref = new \\ReflectionFunction(#[A4(1)] function () { });\ntry {\n    $ref->getAttributes()[0]->newInstance();\n} catch (\\Error $e) {\n    var_dump('ERROR 5', $e->getMessage());\n}\necho \"\\n\";\nclass A5 { }\n$ref = new \\ReflectionFunction(#[A5] function () { });\ntry {\n    $ref->getAttributes()[0]->newInstance();\n} catch (\\Error $e) {\n    var_dump('ERROR 6', $e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
