// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/005.phpt
  it("highlight_string(), output buffer and error level", function () {
    expect(parser.parseCode("<?php\necho \"hello\\n\";\n$string = str_repeat(\"A\", 1024);\nvar_dump(error_reporting());\nhighlight_string($string, true);\nvar_dump(ob_get_contents());\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
