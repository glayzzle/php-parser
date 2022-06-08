// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/002.phpt
  it("preg_* with bogus vals", function () {
    expect(parser.parseCode("<?php\ntry {\n    preg_match_all('//', '', $dummy, 0xdead);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(preg_quote(''));\nvar_dump(preg_replace('/(.)/', '${1}${1', 'abc'));\nvar_dump(preg_replace('/.++\\d*+[/', 'for ($', 'abc'));\nvar_dump(preg_replace('/(.)/e', 'for ($', 'abc'));\n?>")).toMatchSnapshot();
  });
});
