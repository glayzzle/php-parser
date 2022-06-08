// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/no_link_open.phpt
  it("Using pg function with default link while no link open", function () {
    expect(parser.parseCode("<?php\ntry {\n    pg_dbname();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
