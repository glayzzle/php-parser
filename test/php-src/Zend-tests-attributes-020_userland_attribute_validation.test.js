// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/020_userland_attribute_validation.phpt
  it("Attributes expose and verify target and repeatable data.", function () {
    expect(parser.parseCode("<?php\n#[Attribute(Attribute::TARGET_FUNCTION | Attribute::TARGET_METHOD)]\nclass A1 { }\n$ref = new \\ReflectionFunction(#[A1] function () { });\n$attr = $ref->getAttributes()[0];\nvar_dump($attr->getName(), $attr->getTarget() == Attribute::TARGET_FUNCTION, $attr->isRepeated());\nvar_dump(get_class($attr->newInstance()));\necho \"\\n\";\n$ref = new \\ReflectionObject(new #[A1] class() { });\n$attr = $ref->getAttributes()[0];\nvar_dump($attr->getName(), $attr->getTarget() == Attribute::TARGET_CLASS, $attr->isRepeated());\ntry {\n    $attr->newInstance();\n} catch (\\Throwable $e) {\n    var_dump('ERROR 1', $e->getMessage());\n}\necho \"\\n\";\n$ref = new \\ReflectionFunction(#[A1] #[A1] function () { });\n$attr = $ref->getAttributes()[0];\nvar_dump($attr->getName(), $attr->getTarget() == Attribute::TARGET_FUNCTION, $attr->isRepeated());\ntry {\n    $attr->newInstance();\n} catch (\\Throwable $e) {\n    var_dump('ERROR 2', $e->getMessage());\n}\necho \"\\n\";\n#[Attribute(Attribute::TARGET_CLASS | Attribute::IS_REPEATABLE)]\nclass A2 { }\n$ref = new \\ReflectionObject(new #[A2] #[A2] class() { });\n$attr = $ref->getAttributes()[0];\nvar_dump($attr->getName(), $attr->getTarget() == Attribute::TARGET_CLASS, $attr->isRepeated());\nvar_dump(get_class($attr->newInstance()));\n?>")).toMatchSnapshot();
  });
});
