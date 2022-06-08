// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/027.phpt
  it("filter_var() and FILTER_SANITIZE_ENCODED", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"?><!@#$%^&*()}{~Qwertyuilfdsasdfgmnbvcxcvbn\", FILTER_SANITIZE_ENCODED));\nvar_dump(filter_var(\"<data&sons>\", FILTER_SANITIZE_ENCODED));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_ENCODED));\nvar_dump(filter_var(\"?><!@#$%^&*()}{~Qwertyuilfdsasdfgmnbvcxcvbn\", FILTER_SANITIZE_ENCODED, FILTER_FLAG_ENCODE_LOW));\nvar_dump(filter_var(\"<data&sons>\", FILTER_SANITIZE_ENCODED, FILTER_FLAG_ENCODE_LOW));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_ENCODED, FILTER_FLAG_ENCODE_LOW));\nvar_dump(filter_var(\"?><!@#$%^&*()}{~Qwertyuilfdsasdfgmnbvcxcvbn\", FILTER_SANITIZE_ENCODED, FILTER_FLAG_ENCODE_HIGH));\nvar_dump(filter_var(\"<data&sons>\", FILTER_SANITIZE_ENCODED, FILTER_FLAG_ENCODE_HIGH));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_ENCODED, FILTER_FLAG_ENCODE_HIGH));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
