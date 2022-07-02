// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/count_chars_basic.phpt
  it("Test count_chars() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing count_chars() : basic functionality ***\\n\";\n$string = \"Return information about characters used in a string\";\nvar_dump(count_chars($string));\nvar_dump(count_chars($string, 0));\nvar_dump(count_chars($string, 1));\nvar_dump(count_chars($string, 2));\nvar_dump(count_chars($string, 3));\nvar_dump(bin2hex(count_chars($string, 4)));\ntry {\n    count_chars($string, 5);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
