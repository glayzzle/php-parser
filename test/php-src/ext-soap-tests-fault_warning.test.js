// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/fault_warning.phpt
  it("SoapFault class: Invalid Fault code warning given? Can't be an empty string, an array of not 2 elements etc.", function () {
    expect(parser.parseCode("<?php\ntry {\n    new SoapFault(\"\", \"message\"); // Can't be an empty string\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    new SoapFault(new stdClass(), \"message\");  // Can't be a non-string (except for null)\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$fault = new SoapFault(\"Sender\", \"message\");\necho get_class($fault) . \"\\n\";\n$fault = new SoapFault(null, \"message\");\necho get_class($fault) . \"\\n\";\ntry {\n    new SoapFault([\"more\"], \"message\");  // two elements in array required\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    new SoapFault([\"m\", \"more\", \"superfluous\"], \"message\"); // two required\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$fault = new SoapFault([\"more-ns\", \"Sender\"], \"message\");  // two given\necho get_class($fault);\n?>")).toMatchSnapshot();
  });
});
