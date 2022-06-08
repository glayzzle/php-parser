// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/028.phpt
  it("filter_var() and FILTER_SANITIZE_SPECIAL_CHARS", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"?><!@#$%^&*()}{~Qwertyuilfdsasdfgmnbvcxcvbn\", FILTER_SANITIZE_SPECIAL_CHARS));\nvar_dump(filter_var(\"<data&sons>\", FILTER_SANITIZE_SPECIAL_CHARS));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_SPECIAL_CHARS));\nvar_dump(filter_var(\"?><!@#$%^&*()}{~Qwertyuilfdsasdfgmnbvcxcvbn\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_ENCODE_LOW));\nvar_dump(filter_var(\"<data&sons>\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_ENCODE_LOW));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_ENCODE_LOW));\nvar_dump(filter_var(\"?><!@#$%^&*()}{~Qwertyuilfdsasdfgmnbvcxcvbn\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_ENCODE_HIGH));\nvar_dump(filter_var(\"<data&sons>\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_ENCODE_HIGH));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_ENCODE_HIGH));\nvar_dump(filter_var(\"кириллица\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_ENCODE_HIGH));\nvar_dump(filter_var(\"кириллица\", FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_ENCODE_LOW));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
