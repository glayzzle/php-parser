// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getConstants_filter.phpt
  it("ReflectionClass::getConstants() with $filter", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public const PUBLIC_CONST = 'BAR';\n    public const ANOTHER_PUBLIC_CONST = 'BAZ';\n    protected const PROTECTED_CONST = 'FOO';\n    private const PRIVATE_CONST = 'QUOZ';\n}\nclass B {\n  public const PUBLIC_CONST = 'BAR';\n  protected const ANOTHER_PROTECTED_CONST = 'BAZ';\n  protected const PROTECTED_CONST = 'FOO';\n  private const PRIVATE_CONST = 'QUOZ';\n}\nclass C {\n  public const PUBLIC_CONST = 'BAR';\n  protected const PROTECTED_CONST = 'FOO';\n  private const PRIVATE_CONST = 'QUOZ';\n  private const ANOTHER_PRIVATE_CONST = 'BAZ';\n}\n$reflectionClassA = new ReflectionClass(A::class);\nvar_dump($reflectionClassA->getConstants(ReflectionClassConstant::IS_PUBLIC));\n$reflectionClassB = new ReflectionClass(B::class);\nvar_dump($reflectionClassB->getConstants(ReflectionClassConstant::IS_PROTECTED));\n$reflectionClassC = new ReflectionClass(C::class);\nvar_dump($reflectionClassC->getConstants(ReflectionClassConstant::IS_PRIVATE));\n?>")).toMatchSnapshot();
  });
});
