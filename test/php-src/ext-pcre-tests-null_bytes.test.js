// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/null_bytes.phpt
  it("Zero byte test", function () {
    expect(parser.parseCode("<?php\npreg_match(\"\\0//i\", \"\");\npreg_match(\"/\\0/i\", \"\");\npreg_match(\"//\\0i\", \"\");\npreg_match(\"//i\\0\", \"\");\npreg_match(\"/\\\\\\0/i\", \"\");\npreg_match(\"\\0[]i\", \"\");\npreg_match(\"[\\0]i\", \"\");\npreg_match(\"[]\\0i\", \"\");\npreg_match(\"[]i\\0\", \"\");\npreg_match(\"[\\\\\\0]i\", \"\");\npreg_replace(\"/foo/e\\0/i\", \"echo('Eek');\", \"\");\n?>")).toMatchSnapshot();
  });
});
