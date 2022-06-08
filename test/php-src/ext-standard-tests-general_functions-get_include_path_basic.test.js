// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_include_path_basic.phpt
  it("Test get_include_path() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_include_path()\\n\";\nvar_dump(get_include_path());\nif (ini_get(\"include_path\") == get_include_path()) {\n    echo \"PASSED\\n\";\n} else {\n    echo \"FAILED\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
