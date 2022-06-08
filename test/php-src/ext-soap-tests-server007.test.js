// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server007.phpt
  it("SOAP Server 7: addfunction and getfunctions", function () {
    expect(parser.parseCode("<?php\nfunction Add($x,$y) {\n  return $x+$y;\n}\nfunction Sub($x,$y) {\n  return $x-$y;\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->addfunction(array(\"Sub\",\"Add\"));\nvar_dump($server->getfunctions());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
