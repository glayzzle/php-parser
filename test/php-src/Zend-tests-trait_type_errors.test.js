// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/trait_type_errors.phpt
  it("Type errors for methods from traits should refer to using class", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public function test1($arg): int {\n        return $arg;\n    }\n    public function test2(int $arg) {\n    }\n    public function test3(int $arg = 42) {\n    }\n}\nclass C {\n    use T;\n}\nclass P extends C {\n}\n$c = new C;\ntry {\n    $c->test1(\"foo\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $c->test2(\"foo\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $c->test3(\"foo\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
