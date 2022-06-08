// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_constructor.phpt
  it("Attempt to instantiate an IMAP\\Connection directly", function () {
    expect(parser.parseCode("<?php\ntry {\n    new IMAP\\Connection();\n} catch (Error $ex) {\n    echo \"Exception: \", $ex->getMessage(), \"\\n\";\n}")).toMatchSnapshot();
  });
});
