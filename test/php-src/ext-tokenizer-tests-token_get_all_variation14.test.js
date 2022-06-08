// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation14.phpt
  it("Test token_get_all() function : usage variations - invalid token values", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing token_get_all() with 'source' string containing invalid/unknown token value\n *  unknown tokens - T_UNKNOWN(307)\n*/\necho \"*** Testing token_get_all() : with invalid/unknown tokens ***\\n\";\n// with valid php tags and invalid tokens\necho \"-- with valid PHP tags & invlid tokens --\\n\";\n$source = '<?php\nstruct myStruct {\n  variable $a;\n  method() { display $a; }\n}\n?>';\nvar_dump( token_get_all($source));\n// with invalid open tag for testing entire source to be unknown token\necho \"-- with invlalid PHP open tag & valid tokens --\\n\";\n$source = '<pli\necho \"hello world\"; ?>';\nvar_dump( token_get_all($source));\n// with invalid PHP tags and invalid tokens\necho \"-- with invalid PHP tags and tokens --\\n\";\n$source = '<PDP display  $a; <';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
