// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/014.phpt
  it("SimpleXML: adding/removing attributes (direct)", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n   <person name=\"Joe\"></person>\n</people>\nEOF;\n$people = simplexml_load_string($xml);\nvar_dump($people->person['name']);\nvar_dump($people->person['age']);\n$person = $people->person;\n$person['name'] = \"XXX\";\nvar_dump($people->person['name']);\n$people->person['age'] = 30;\nvar_dump($people->person['age']);\necho \"---Unset:---\\n\";\nunset($people->person['age']);\necho \"---Unset?---\\n\";\nvar_dump($people->person['age']);\nvar_dump(isset($people->person['age']));\n$people->person['age'] = 30;\necho \"---Unsupported---\\n\";\nvar_dump($people->person['age']);\n$people->person['age'] += 5;\nvar_dump($people->person['age']);\n?>")).toMatchSnapshot();
  });
});
