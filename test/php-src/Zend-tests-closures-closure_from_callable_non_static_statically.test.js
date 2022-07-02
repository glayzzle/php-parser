// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closures/closure_from_callable_non_static_statically.phpt
  it("Testing Closure::fromCallable() functionality: Getting non-static method statically", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function method() {\n    }\n}\ntry {\n    $fn = Closure::fromCallable(['A', 'method']);\n    $fn();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
