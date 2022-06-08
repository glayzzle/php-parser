// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/040.phpt
  it("filter_has_var() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_has_var(INPUT_GET,\"\"));\nvar_dump(filter_has_var(INPUT_POST, \"ap\"));\nvar_dump(filter_has_var(INPUT_POST, \"cp\"));\nvar_dump(filter_has_var(INPUT_GET, \"a\"));\nvar_dump(filter_has_var(INPUT_GET, \"c\"));\nvar_dump(filter_has_var(INPUT_GET, \"abc\"));\nvar_dump(filter_has_var(INPUT_GET, \"cc\"));\ntry {\n    filter_has_var(-1, \"cc\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(filter_has_var(0, \"cc\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
