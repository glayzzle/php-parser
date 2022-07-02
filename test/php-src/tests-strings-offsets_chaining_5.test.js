// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/strings/offsets_chaining_5.phpt
  it("testing the behavior of string offset chaining", function () {
    expect(parser.parseCode("<?php\n$array = array('expected_array' => \"foobar\");\nvar_dump(isset($array['expected_array']));\nvar_dump($array['expected_array']);\nvar_dump(isset($array['expected_array']['foo']));\nvar_dump($array['expected_array']['0foo']);\nvar_dump(isset($array['expected_array']['foo']['bar']));\nvar_dump($array['expected_array']['0foo']['0bar']);\n?>")).toMatchSnapshot();
  });
});
