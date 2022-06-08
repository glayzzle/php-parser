// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_failed_assign_is_not_init.phpt
  it("A failed assignment should not be considered an initialization", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $prop;\n    public function __get($name) {\n        echo \"__get() called\\n\";\n        return 0;\n    }\n}\n$test = new Test;\ntry {\n    $test->prop;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->prop = \"foo\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->prop;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
