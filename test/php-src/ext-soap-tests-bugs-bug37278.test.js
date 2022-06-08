// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug37278.phpt
  it("Bug #37278 (SOAP not respecting uri in __soapCall)", function () {
    expect(parser.parseCode("<?php\n$options = array(\n  \"location\" => \"test://\",\n  \"uri\"      => \"http://bricolage.sourceforge.net/Bric/SOAP/Auth\",\n  \"trace\"    => 1);\n$client = new SoapClient(null, $options);\n$newNS = \"http://bricolage.sourceforge.net/Bric/SOAP/Story\";\ntry {\n  $client->__soapCall(\"list_ids\", array(), array(\"uri\" => $newNS));\n} catch (Exception $e) {\n  print $client->__getLastRequest();\n}\n?>")).toMatchSnapshot();
  });
});
