// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_covariance.phpt
  it("never return type: acceptable covariance cases", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public function foo(): string\n    {\n        return \"hello\";\n    }\n    public function bar(): never\n    {\n        throw new UnexpectedValueException('parent');\n    }\n    public function &baz()\n    {\n    }\n    public function someReturningStaticMethod() : static\n    {\n    }\n}\nclass B extends A\n{\n    public function foo(): never\n    {\n        throw new UnexpectedValueException('bad');\n    }\n    public function bar(): never\n    {\n        throw new UnexpectedValueException('child');\n    }\n    public function &baz(): never\n    {\n        throw new UnexpectedValueException('child');\n    }\n    public function someReturningStaticMethod(): never\n    {\n        throw new UnexpectedValueException('child');\n    }\n}\ntry {\n    (new B)->foo();\n} catch (UnexpectedValueException $e) {\n    // do nothing\n}\ntry {\n    (new B)->bar();\n} catch (UnexpectedValueException $e) {\n    // do nothing\n}\ntry {\n    (new B)->baz();\n} catch (UnexpectedValueException $e) {\n    // do nothing\n}\ntry {\n    (new B)->someReturningStaticMethod();\n} catch (UnexpectedValueException $e) {\n    // do nothing\n}\necho \"OK!\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
