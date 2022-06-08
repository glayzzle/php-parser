// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/truncated.phpt
  it("Phar: truncated tar", function () {
    expect(parser.parseCode("<?php\ntry {\n    $p = new PharData(__DIR__ . '/files/trunc.tar');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
