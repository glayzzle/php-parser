// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation18.phpt
  it("Test token_get_all() function : usage variations - with HTML code", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing token_get_all() with source string containing HTML code with PHP\n *   HTML tags are considered to be T_INLINE_HTML(311)\n*/\necho \"*** Testing token_get_all() : 'source' string with HTML tags ***\\n\";\n$source = '\n<html>\n<body>\n    Testing HTML\n</body>\n</html>\"\n<?php\n    echo \"php code with HTML\";\n?>';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
