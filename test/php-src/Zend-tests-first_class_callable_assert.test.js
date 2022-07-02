// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_assert.phpt
  it("Acquire callable to assert()", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\n$assert = assert(...);\n$assert(1 == 1.0, \"Message 1\");\ntry {\n    $assert(1 == 2.0, \"Message 2\");\n} catch (\\AssertionError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    assert(false && strlen(...));\n} catch (\\AssertionError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
