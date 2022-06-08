// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/014b.phpt
  it("SimpleXML: adding/removing attributes (second)", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n   <person name=\"Joe\"></person>\n   <person name=\"Boe\"></person>\n</people>\nEOF;\n$people = simplexml_load_string($xml);\nvar_dump($people->person[0]['name']);\nvar_dump($people->person[1]['age']);\n$person = $people->person[1];\n$person['name'] = \"XXX\";\nvar_dump($people->person[1]['name']);\n$people->person[1]['age'] = 30;\nvar_dump($people->person[1]['age']);\necho \"---Unset:---\\n\";\nunset($people->person[1]['age']);\necho \"---Unset?---\\n\";\nvar_dump($people->person[1]['age']);\nvar_dump(isset($people->person[1]['age']));\necho \"---Unsupported---\\n\";\n$people->person[1]['age'] += 5;\nvar_dump($people->person[1]['age']);\n?>")).toMatchSnapshot();
  });
});
