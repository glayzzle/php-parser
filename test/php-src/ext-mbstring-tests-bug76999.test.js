// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug76999.phpt
  it("Bug #76999 (mb_regex_set_options() return current options)", function () {
    expect(parser.parseCode("<?php\nmb_regex_set_options(\"pr\");\nvar_dump(mb_regex_set_options(\"m\"));\nvar_dump(mb_regex_set_options(\"mdi\"));\nvar_dump(mb_regex_set_options(\"m\"));\ntry {\n    var_dump(mb_regex_set_options(\"a\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(mb_regex_set_options());\n?>")).toMatchSnapshot();
  });
});
