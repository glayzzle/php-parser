// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/025.phpt
  it("filter_var() and FILTER_SANITIZE_STRING", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"\", FILTER_SANITIZE_STRING));\nvar_dump(filter_var(\"<>\", FILTER_SANITIZE_STRING));\nvar_dump(filter_var(\"<>!@#$%^&*()'\\\"\", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES));\nvar_dump(filter_var(\"<>!@#$%^&*()'\\\"\", FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_AMP));\nvar_dump(filter_var(\"<>`1234567890\", FILTER_SANITIZE_STRING));\nvar_dump(filter_var(\"`123`\", FILTER_SANITIZE_STRING));\nvar_dump(filter_var(\".\", FILTER_SANITIZE_STRING));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
