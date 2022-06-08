// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37811.phpt
  it("Bug #37811 (define not using toString on objects)", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    function __toString()\n    {\n        return \"Foo\";\n    }\n}\ndefine(\"Bar\", new TestClass);\nvar_dump(Bar);\nvar_dump((string) Bar);\ndefine(\"Baz\", new stdClass);\nvar_dump(Baz);\ntry {\n    var_dump((string) Baz);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
