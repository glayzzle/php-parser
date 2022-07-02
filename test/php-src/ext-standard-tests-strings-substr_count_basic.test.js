// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/substr_count_basic.phpt
  it("Test substr_count() function (basic)", function () {
    expect(parser.parseCode("<?php\necho \"***Testing basic operations ***\\n\";\ntry {\n    substr_count(\"\", \"\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    substr_count(\"a\", \"\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(substr_count(\"\", \"a\"));\nvar_dump(substr_count(\"\", \"a\"));\nvar_dump(substr_count(\"\", chr(0)));\n$a = str_repeat(\"abcacba\", 100);\nvar_dump(substr_count($a, \"bca\"));\n$a = str_repeat(\"abcacbabca\", 100);\nvar_dump(substr_count($a, \"bca\"));\nvar_dump(substr_count($a, \"bca\", 200));\nvar_dump(substr_count($a, \"bca\", 200, null));\nvar_dump(substr_count($a, \"bca\", 200, 50));\nvar_dump(substr_count($a, \"bca\", -200));\nvar_dump(substr_count($a, \"bca\", -200, null));\nvar_dump(substr_count($a, \"bca\", -200, 50));\nvar_dump(substr_count($a, \"bca\", -200, -50));\n?>")).toMatchSnapshot();
  });
});
