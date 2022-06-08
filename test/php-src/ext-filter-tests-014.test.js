// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/014.phpt
  it("filter_var() and FILTER_VALIDATE_BOOLEAN", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __toString() {\n        return \"blah\";\n    }\n}\n$t = new test;\nvar_dump(filter_var(\"no\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(NULL, FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var($t, FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(array(1,2,3,0,array(\"\", \"123\")), FILTER_VALIDATE_BOOLEAN, FILTER_REQUIRE_ARRAY));\nvar_dump(filter_var(\"yes\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"true\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"false\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"off\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"on\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"0\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"1\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"NONE\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(-1, FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"000000\", FILTER_VALIDATE_BOOLEAN));\nvar_dump(filter_var(\"111111\", FILTER_VALIDATE_BOOLEAN));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
