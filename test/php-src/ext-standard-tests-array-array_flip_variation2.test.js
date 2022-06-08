// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_flip_variation2.phpt
  it("Test array_flip() function : usage variations - 'input' array with different keys", function () {
    expect(parser.parseCode("<?php\n/*\n* Trying different keys in $input array argument\n*/\necho \"*** Testing array_flip() : different keys for 'input' array argument ***\\n\";\n// different heredoc strings\n$empty_heredoc = <<<EOT1\nEOT1;\n$simple_heredoc = <<<EOT4\nsimple\nEOT4;\n$multiline_heredoc = <<<EOT7\nmultiline heredoc with 123 and\nspeci@! ch@r$...checking\\nand\\talso\nEOT7;\n$input = array(\n  // default key\n  'one',  //expected: default key 0, value will be replaced by 'bool_key4'\n  // numeric keys\n  1 => 'int_key', // expected: value will be replaced by 'bool_key3'\n  -2 => 'negative_key',\n  012 => 'octal_key',\n  0x34 => 'hex_key',\n  // string keys\n  'key' => 'string_key1',\n  \"two\" => 'string_key2',\n  '' => 'string_key3',\n  \"\" => 'string_key4',\n  \" \" => 'string_key5',\n  // bool keys\n  true => 'bool_key1',\n  false => 'bool_key2',\n  TRUE => 'bool_key3',\n  FALSE => 'bool_key4',\n  // null keys\n  null => 'null_key1',  // expected: value will be replaced by 'null_key2'\n  NULL => 'null_key2',\n  // binary key\n  \"a\".chr(0).\"b\" => 'binary_key1',\n  b\"binary\" => 'binary_key2',\n  //heredoc keys\n  $empty_heredoc => 'empty_heredoc',\n  $simple_heredoc => 'simple_heredoc',\n  $multiline_heredoc => 'multiline_heredoc',\n);\nvar_dump( array_flip($input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
