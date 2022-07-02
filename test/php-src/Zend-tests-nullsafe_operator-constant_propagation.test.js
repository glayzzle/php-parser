// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/constant_propagation.phpt
  it("Constant propagation with nullsafe operator", function () {
    expect(parser.parseCode("<?php\nclass Bar { const FOO = \"foo\"; }\ntry {\n    Bar::FOO?->length();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
