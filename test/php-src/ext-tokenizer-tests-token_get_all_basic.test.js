// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_basic.phpt
  it("Test token_get_all() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing token_get_all() : basic functionality ***\\n\";\n// with php open/close tags\n$source = '<?php echo \"Hello World\"; ?>';\necho \"-- source string with PHP open and close tags --\\n\";\nvar_dump( token_get_all($source) );\n// without php open/close tags testing for T_INLINE_HTML\n$source = \"echo 'Hello World';\";\necho \"-- source string without PHP open and close tags --\\n\";\nvar_dump( token_get_all($source) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
