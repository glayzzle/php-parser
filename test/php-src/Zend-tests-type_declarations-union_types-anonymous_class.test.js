// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/anonymous_class.phpt
  it("Union with anonymous class type", function () {
    expect(parser.parseCode("<?php\n$a = new class {\n    public function testParam(self|string $a)\n    {\n    }\n    public function test(): self|string\n    {\n        return new \\stdClass;\n    }\n};\ntry {\n    $a->testParam(null);\n} catch (\\Throwable $e) {\n    echo $e->getMessage().\"\\n\";\n}\ntry {\n    $a->test();\n} catch (\\Throwable $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
