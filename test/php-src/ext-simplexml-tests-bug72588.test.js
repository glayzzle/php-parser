// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug72588.phpt
  it("Bug #72588 (Using global var doesn't work while accessing SimpleXML element)", function () {
    expect(parser.parseCode("<?php\n$tpnb = 5;\n$dummy = &$tpnb;\n$xmlStruct = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<templates>\n    <object type=\"obj_1\" label=\"Label for object 1\"></object>\n    <object type=\"obj_2\" label=\"Label for object 2\"></object>\n    <object type=\"obj_3\" label=\"Label for object 3\"></object>\n    <object type=\"obj_4\" label=\"Label for object 4\"></object>\n    <object type=\"obj_5\" label=\"Label for object 5\"></object>\n    <object type=\"obj_6\" label=\"Label for object 6\"></object>\n    <object type=\"obj_7\" label=\"Label for object 7\"></object>\n    <object type=\"obj_8\" label=\"Label for object 8\"></object>\n    <object type=\"obj_9\" label=\"Label for object 9\"></object>\n    <object type=\"obj_10\" label=\"Label for object 10\"></object>\n</templates>\nEOF;\n$tplxml = simplexml_load_string($xmlStruct);\nvar_dump($tplxml->object[$tpnb]);\n?>")).toMatchSnapshot();
  });
});
