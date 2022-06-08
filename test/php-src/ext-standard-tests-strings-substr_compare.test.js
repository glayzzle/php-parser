// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/substr_compare.phpt
  it("substr_compare()", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr_compare(\"abcde\", \"df\", -2) < 0);\nvar_dump(substr_compare(\"abcde\", \"df\", -2, null) < 0);\nvar_dump(substr_compare(\"abcde\", \"bc\", 1, 2));\nvar_dump(substr_compare(\"abcde\", \"bcg\", 1, 2));\nvar_dump(substr_compare(\"abcde\", \"BC\", 1, 2, true));\nvar_dump(substr_compare(\"abcde\", \"bc\", 1, 3) > 0);\nvar_dump(substr_compare(\"abcde\", \"cd\", 1, 2) < 0);\nvar_dump(substr_compare(\"abcde\", \"abc\", 5, 1));\nvar_dump(substr_compare(\"abcde\", \"abcdef\", -10, 10) < 0);\nvar_dump(substr_compare(\"abcde\", \"abc\", 0, 0));\necho \"Test\\n\";\ntry {\n    substr_compare(\"abcde\", \"abc\", 0, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(substr_compare(\"abcde\", \"abc\", -1, NULL, -5) > 0);\n?>")).toMatchSnapshot();
  });
});
