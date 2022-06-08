// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/003_ast_nodes.phpt
  it("Attributes can deal with AST nodes.", function () {
    expect(parser.parseCode("<?php\ndefine('V1', strtoupper(php_sapi_name()));\n#[A1([V1 => V1])]\nclass C1\n{\n    public const BAR = 'bar';\n}\n$ref = new \\ReflectionClass(C1::class);\n$attr = $ref->getAttributes();\nvar_dump(count($attr));\n$args = $attr[0]->getArguments();\nvar_dump(count($args), $args[0][V1] === V1);\necho \"\\n\";\n#[A1(V1, 1 + 2, C1::class)]\nclass C2 { }\n$ref = new \\ReflectionClass(C2::class);\n$attr = $ref->getAttributes();\nvar_dump(count($attr));\n$args = $attr[0]->getArguments();\nvar_dump(count($args));\nvar_dump($args[0] === V1);\nvar_dump($args[1] === 3);\nvar_dump($args[2] === C1::class);\necho \"\\n\";\n#[A1(self::FOO, C1::BAR)]\nclass C3\n{\n    private const FOO = 'foo';\n}\n$ref = new \\ReflectionClass(C3::class);\n$attr = $ref->getAttributes();\nvar_dump(count($attr));\n$args = $attr[0]->getArguments();\nvar_dump(count($args));\nvar_dump($args[0] === 'foo');\nvar_dump($args[1] === C1::BAR);\necho \"\\n\";\n#[ExampleWithShift(4 >> 1)]\nclass C4 {}\n$ref = new \\ReflectionClass(C4::class);\nvar_dump($ref->getAttributes()[0]->getArguments());\necho \"\\n\";\n#[Attribute]\nclass C5\n{\n    public function __construct() { }\n}\n$ref = new \\ReflectionFunction(#[C5(MissingClass::SOME_CONST)] function () { });\n$attr = $ref->getAttributes();\nvar_dump(count($attr));\ntry {\n    $attr[0]->getArguments();\n} catch (\\Error $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    $attr[0]->newInstance();\n} catch (\\Error $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
