// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/html_entity_decode1.phpt
  it("html_entity_decode: Decoding of entities after invalid entities", function () {
    expect(parser.parseCode("<?php\n$arr = array(\n    \"&\",\n    \"&&amp;\",\n    \"&&#x24;\",\n    \"&#&amp;\",\n    \"&#&#x24;\",\n    \"&#x&amp;\",\n    \"&#x&#x24;\",\n    \"&#x1&amp;\",\n    \"&#x1&#x24;\",\n    \"&#x20&amp;\",\n    \"&#x20&#x24;\",\n    \"&#1&amp;\",\n    \"&#1&#x24;\",\n    \"&#20&amp;\",\n    \"&#20&#x24;\",\n    \"&a&amp;\",\n    \"&a&#x24;\",\n    \"&aa&amp;\",\n    \"&aa&#x24;\",\n    \"&aa;&amp;\",\n    \"&aa;&#x24;\",\n    \"&;&amp;\",\n    \"&;&#x24;\",\n);\n$i = 0;\nforeach ($arr as $ent) {\n    if ($i % 2 == 1) {\n        if (($a = html_entity_decode($ent, ENT_QUOTES, 'UTF-8')) !=\n                ($b = htmlspecialchars_decode($ent, ENT_QUOTES))) {\n            echo \"htmlspecialchars_decode <-> html_entity_decode inconsistency\",\"\\n\",\n                 \"$b <-> $a\",\"\\n\";\n        }\n    }\n    echo html_entity_decode($ent, ENT_QUOTES, 'UTF-8'), \"\\n\";\n}\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
