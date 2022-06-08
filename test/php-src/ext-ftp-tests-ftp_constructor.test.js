// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_constructor.phpt
  it("Attempt to instantiate an FTP\\Connection directly", function () {
    expect(parser.parseCode("<?php\ntry {\n    new FTP\\Connection();\n} catch (Error $ex) {\n    echo \"Exception: \", $ex->getMessage(), \"\\n\";\n}")).toMatchSnapshot();
  });
});
