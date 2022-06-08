// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54305.phpt
  it("Bug #54305 (Crash in gc_remove_zval_from_buffer)", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public function methodWithArgs($a, $b) {\n    }\n}\nabstract class AbstractClass {\n}\n$methodWithArgs = new ReflectionMethod('TestClass', 'methodWithArgs');\ntry {\n    echo $methodWithArgs++;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
