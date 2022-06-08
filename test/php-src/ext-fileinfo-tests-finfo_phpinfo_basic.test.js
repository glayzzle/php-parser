// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_phpinfo_basic.phpt
  it("Test finfo extension : loading into phpinfo()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing finfo extension : loading info phpinfo() ***\\n\";\nob_start();\necho phpinfo(8);\n$output = ob_get_clean();\nvar_dump(preg_match(\"/fileinfo support => enabled/\", $output));\n?>")).toMatchSnapshot();
  });
});
