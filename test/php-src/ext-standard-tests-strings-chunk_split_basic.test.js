// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_basic.phpt
  it("Test chunk_split() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing chunk_split() for basic functionality by passing all possible\n* arguments as well as with default arguments chunklen and ending\n*/\necho \"*** Testing chunk_split() : basic functionality ***\\n\";\n// Initialise all required variables\n$str = 'Testing';\n$chunklen = 2;\n$ending = '##';\n// Calling chunk_split() with all possible arguments\necho \"-- Testing chunk_split() with all possible arguments --\\n\";\nvar_dump( chunk_split($str, $chunklen, $ending) );\n// Calling chunk_split() with default ending string\necho \"-- Testing chunk_split() with default ending string --\\n\";\nvar_dump( chunk_split($str, $chunklen) );\n//Calling chunk_split() with default chunklen and ending string\necho \"-- Testing chunk_split() with default chunklen and ending string --\\n\";\nvar_dump( chunk_split($str) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
