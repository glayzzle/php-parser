// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug50698_2.phpt
  it("Request #50698_2 (SoapClient should handle wsdls with some incompatible endpoints -- EDGECASE: Large mix of compatible and incompatible endpoints.)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new SoapClient(__DIR__ . '/bug50698_2.wsdl');\n    echo \"Call: \\\"new SoapClient(__DIR__.'/bug50698_2.wsdl');\\\" should throw an exception of type 'SoapFault'\";\n} catch (SoapFault $e) {\n    if ($e->faultcode == 'WSDL' && $e->faultstring == 'SOAP-ERROR: Parsing WSDL: Could not find any usable binding services in WSDL.') {\n        echo \"ok\\n\";\n    } else {\n        echo \"Call: \\\"new SoapClient(__DIR__.'/bug50698_2.wsdl');\\\" threw a SoapFault with an incorrect faultcode or faultmessage.\";\n        print_r($e);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
