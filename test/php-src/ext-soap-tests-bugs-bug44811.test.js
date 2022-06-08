// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug44811.phpt
  it("Bug #44811 (Improve error messages when creating new SoapClient which contains invalid data)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $x = new SoapClient('https://php.net');\n} catch (SoapFault $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\ndie('ok');\n?>")).toMatchSnapshot();
  });
});
