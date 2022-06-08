// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/004.phpt
  it("libxml_set_streams_context()", function () {
    expect(parser.parseCode("<?php\n$ctxs = array(\n    NULL,\n    'bogus',\n    123,\n    new stdclass,\n    array('a'),\n    stream_context_create(),\n);\nforeach ($ctxs as $ctx) {\n    try {\n        var_dump(libxml_set_streams_context($ctx));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    $dom = new DOMDocument();\n    var_dump($dom->load(__DIR__.'/test.xml'));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
