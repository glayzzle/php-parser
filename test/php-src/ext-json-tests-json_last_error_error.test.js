// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_last_error_error.phpt
  it("json_last_error() failures", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_last_error());\ntry {\n    var_dump(json_last_error(true));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
