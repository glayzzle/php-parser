// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/error2.phpt
  it("Exercise error code for SUCCESS_WITH_INFO", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\nini_set('error_reporting', E_ALL);\n$s = oci_parse($c, \"create or replace procedure myproc as begin bogus end;\");\n$e = @oci_execute($s);\nif (!$e) {\n    $es = oci_error($s);\n    echo $es['message'].\"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
