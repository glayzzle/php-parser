// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug72195.phpt
  it("Bug #72195 (pg_pconnect/pg_connect cause use-after-free)", function () {
    expect(parser.parseCode("<?php\n$val = [];\ntry {\n    pg_pconnect($var1, \"2\", \"3\", \"4\");\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
