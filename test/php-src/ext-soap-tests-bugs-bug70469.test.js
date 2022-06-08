// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug70469.phpt
  it("Bug #70469 (SoapClient should not generate E_ERROR if exceptions enabled)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $x = new SoapClient('http://i_dont_exist.com/some.wsdl');\n} catch (SoapFault $e) {\n    echo \"caught\\n\";\n}\n$error = error_get_last();\nif ($error === null) {\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
