// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/switch_on_numeric_strings.phpt
  it("Switch on numeric strings", function () {
    expect(parser.parseCode("<?php\nfunction test($value) {\n    switch ($value) {\n        case \"01\": return \"01\";\n        case \"1\": return \"1\";\n        case \" 2\": return \" 2\";\n        case \"2\": return \"2\";\n        case \"10.0\": return \"10.0\";\n        case \"1e1\": return \"1e1\";\n        default: return \"default\";\n    }\n}\nvar_dump(test(\"1\"));\nvar_dump(test(\"2\"));\nvar_dump(test(\"1e1\"));\n?>")).toMatchSnapshot();
  });
});
