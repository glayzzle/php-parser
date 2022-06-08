// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/016.phpt
  it("SimpleXML: modifying attributes of singular subnode", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n   <person name=\"Joe\"></person>\n</people>\nEOF;\n$people = simplexml_load_string($xml);\nvar_dump($people->person['name']);\n$people->person['name'] = $people->person['name'] . 'Foo';\nvar_dump($people->person['name']);\n$people->person['name'] .= 'Bar';\nvar_dump($people->person['name']);\necho \"---[0]---\\n\";\n$people = simplexml_load_string($xml);\nvar_dump($people->person[0]['name']);\n$people->person[0]['name'] = $people->person[0]['name'] . 'Foo';\nvar_dump($people->person[0]['name']);\n$people->person[0]['name'] .= 'Bar';\nvar_dump($people->person[0]['name']);\n?>")).toMatchSnapshot();
  });
});
