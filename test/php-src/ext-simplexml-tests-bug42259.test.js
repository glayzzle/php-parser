// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug42259.phpt
  it("Bug #42259 (SimpleXMLIterator loses ancestry)", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<xml>\n  <fieldset1>\n    <field1/>\n    <field2/>\n  </fieldset1>\n  <fieldset2>\n    <options>\n      <option1/>\n      <option2/>\n      <option3/>\n    </options>\n    <field1/>\n    <field2/>\n  </fieldset2>\n</xml>\nEOF;\n$sxe = new SimpleXMLIterator($xml);\n$rit = new RecursiveIteratorIterator($sxe, RecursiveIteratorIterator::LEAVES_ONLY);\nforeach ($rit as $child) {\n  $path = '';\n  $ancestry = $child->xpath('ancestor-or-self::*');\n  foreach ($ancestry as $ancestor) {\n    $path .= $ancestor->getName() . '/';\n  }\n  $path = substr($path, 0, strlen($path) - 1);\n  echo count($ancestry) . ' steps: ' . $path . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
