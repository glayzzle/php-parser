// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_fully_qualified_call.phpt
  it("Crash when using dynamic call syntax with fully qualified name in a namespace", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\ntry {\n    ('\\bar')();\n} catch (\\Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
