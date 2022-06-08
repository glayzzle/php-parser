// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug34657.phpt
  it("Bug #34657 (If you get a communication problem when loading the WSDL, it fatal's)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $client = new SoapClient('http://i_dont_exist.com/some.wsdl');\n    echo \"?\\n\";\n} catch (SoapFault $e) {\n    echo get_class($e).\"\\n\";\n    echo $e->faultstring.\"\\n\";\n    echo \"ok\\n\";\n} catch (Exception $e) {\n    echo get_class($e).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
