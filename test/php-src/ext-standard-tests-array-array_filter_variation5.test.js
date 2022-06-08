// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_variation5.phpt
  it("Test array_filter() function : usage variations - 'input' argument with different false entries", function () {
    expect(parser.parseCode("<?php\n/*\n* With default callback function argument, array_filter() removes elements which are interpreted as false\n* Here Testing all the false array element possibilities\n*/\nfunction always_true($input)\n{\n  return true;\n}\n// callback function always_false\nfunction always_false($input)\n{\n  return false;\n}\necho \"*** Testing array_filter() : usage variations - different false elements in 'input' ***\\n\";\n// unset variable\n$unset_var = 10;\nunset($unset_var);\n// empty heredoc string\n$empty_heredoc =<<<EOT\nEOT;\n// input array with different false elements\n$input = array(\n  false,\n  False,\n  '',\n  \"\",\n  0,\n  0.0,\n  null,\n  NULL,\n  \"0\",\n  '0',\n  array(),\n  !1,\n  1==2,\n  $empty_heredoc,\n  @$unset_var,\n  @$undefined_var,\n);\n// With default callback function\nvar_dump( array_filter($input) );\n// With callback function which returns always true\nvar_dump( array_filter($input, 'always_true') );\n// With callback function which returns always false\nvar_dump( array_filter($input, 'always_false') );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
