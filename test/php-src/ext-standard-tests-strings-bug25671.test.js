// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug25671.phpt
  it("Bug #25671 (subarrays not copied correctly)", function () {
    expect(parser.parseCode("<?php\n  $arr = array(\n    \"This is string one.\",\n    \"This is string two.\",\n    array(\n        \"This is another string.\",\n        \"This is a last string.\"),\n    \"This is a last string.\");\n  echo serialize(str_replace(\"string\", \"strung\", $arr)) . \"\\n\";\n  echo serialize(str_replace(\"string\", \"strung\", $arr)) . \"\\n\";\n  echo serialize(str_replace(\" \", \"\", $arr)) . \"\\n\";\n  echo serialize(str_replace(\" \", \"\", $arr)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
