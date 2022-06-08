// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/023.phpt
  it("filter_var() and FILTER_UNSAFE_RAW", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"}\\\"<p>test para</p>\", FILTER_UNSAFE_RAW, FILTER_FLAG_ENCODE_AMP));\nvar_dump(filter_var(\"a[!@#<b>$%^&*()@a@#$%^&*(.<br>com@#$%^&*(\", FILTER_UNSAFE_RAW, FILTER_FLAG_ENCODE_AMP));\nvar_dump(filter_var(\"white space here \\ \\ \\\" some more\", FILTER_UNSAFE_RAW, FILTER_FLAG_ENCODE_AMP));\nvar_dump(filter_var(\"\", FILTER_UNSAFE_RAW, FILTER_FLAG_ENCODE_AMP));\nvar_dump(filter_var(\"             123456789000000       <qwertyuiop> \", FILTER_UNSAFE_RAW, FILTER_FLAG_ENCODE_AMP));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
