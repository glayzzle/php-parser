// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/010.phpt
  it("filter_var()", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(array(1,\"1\",\"\", \"-23234\", \"text\", \"asdf234asdfgs\", array()), FILTER_VALIDATE_INT, FILTER_REQUIRE_ARRAY));\nvar_dump(filter_var(array(1.2,\"1.7\",\"\", \"-23234.123\", \"text\", \"asdf234.2asdfgs\", array()), FILTER_VALIDATE_FLOAT, FILTER_REQUIRE_ARRAY));\nvar_dump(filter_var(1, FILTER_SANITIZE_SPECIAL_CHARS, 1));\nvar_dump(filter_var(1, FILTER_SANITIZE_SPECIAL_CHARS, 0));\nvar_dump(filter_var(1, FILTER_SANITIZE_SPECIAL_CHARS, array()));\nvar_dump(filter_var(1, -1, array(123)));\nvar_dump(filter_var(1, 0, array()));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
