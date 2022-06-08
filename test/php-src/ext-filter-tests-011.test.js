// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/011.phpt
  it("filter_input()", function () {
    expect(parser.parseCode("<?php\nini_set('html_errors', false);\nvar_dump(filter_input(INPUT_GET, \"b\", FILTER_SANITIZE_URL));\nvar_dump(filter_input(INPUT_GET, \"a\", FILTER_SANITIZE_SPECIAL_CHARS, array(1,2,3,4,5)));\ntry {\n    filter_input(INPUT_GET, \"b\", FILTER_VALIDATE_FLOAT, new stdClass);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(filter_input(INPUT_POST, \"d\", FILTER_VALIDATE_FLOAT));\nvar_dump(filter_input(INPUT_POST, \"c\", FILTER_SANITIZE_SPECIAL_CHARS));\nvar_dump(filter_input(INPUT_POST, \"d\", FILTER_VALIDATE_INT));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
