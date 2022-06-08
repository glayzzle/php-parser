// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug41067.phpt
  it("Bug #41067 (json_encode() problem with UTF-16 input)", function () {
    expect(parser.parseCode("<?php\n$single_barline = \"\\360\\235\\204\\200\";\n$array = array($single_barline);\nprint bin2hex($single_barline) . \"\\n\";\n// print $single_barline . \"\\n\\n\";\n$json = json_encode($array);\nprint $json . \"\\n\\n\";\n$json_decoded = json_decode($json, true);\n// print $json_decoded[0] . \"\\n\";\nprint bin2hex($json_decoded[0]) . \"\\n\";\nprint \"END\\n\";\n?>")).toMatchSnapshot();
  });
});
