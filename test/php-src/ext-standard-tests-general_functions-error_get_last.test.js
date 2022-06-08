// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/error_get_last.phpt
  it("error_get_last() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(error_get_last());\ntry {\n    var_dump(error_get_last(true));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(error_get_last());\n$a = $b;\nvar_dump(error_get_last());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
