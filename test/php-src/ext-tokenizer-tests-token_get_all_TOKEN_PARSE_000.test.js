// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_TOKEN_PARSE_000.phpt
  it("Parse errors during token_get_all() with TOKEN_PARSE flag", function () {
    expect(() => parser.parseCode("<?php\ntry {\n    token_get_all('<?php invalid code;', TOKEN_PARSE);\n} catch (ParseError $e) {\n    echo $e->getMessage(), PHP_EOL;\n}\necho \"Done\";\n?>")).toThrowErrorMatchingSnapshot();
  });
});
