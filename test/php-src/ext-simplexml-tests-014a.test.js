// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/014a.phpt
  it("SimpleXML: adding/removing attributes (single)", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n   <person name=\"Joe\"></person>\n</people>\nEOF;\n$people = simplexml_load_string($xml);\nvar_dump($people->person[0]['name']);\nvar_dump($people->person[0]['age']);\n$person = $people->person[0];\n$person['name'] = \"XXX\";\nvar_dump($people->person[0]['name']);\n$people->person[0]['age'] = 30;\nvar_dump($people->person[0]['age']);\necho \"---Unset:---\\n\";\nunset($people->person[0]['age']);\necho \"---Unset?---\\n\";\nvar_dump($people->person[0]['age']);\nvar_dump(isset($people->person[0]['age']));\necho \"---Unsupported---\\n\";\nvar_dump($people->person[0]['age']);\n$people->person['age'] += 5;\nvar_dump($people->person[0]['age']);\n?>")).toMatchSnapshot();
  });
});
