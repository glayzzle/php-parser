// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/018.phpt
  it("constant() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(constant(\"\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ndefine(\"TEST_CONST\", 1);\nvar_dump(constant(\"TEST_CONST\"));\ndefine(\"TEST_CONST2\", \"test\");\nvar_dump(constant(\"TEST_CONST2\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
