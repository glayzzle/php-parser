// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_extension_funcs_basic.phpt
  it("Test get_extension_funcs() function: basic test", function () {
    expect(parser.parseCode("<?php\necho \"Simple testcase for get_extension_funcs() function\\n\";\n$result = get_extension_funcs(\"standard\");\nvar_dump(gettype($result));\nvar_dump(in_array(\"cos\", $result));\n// Unknown extension\nvar_dump(get_extension_funcs(\"foo\"));\n?>")).toMatchSnapshot();
  });
});
