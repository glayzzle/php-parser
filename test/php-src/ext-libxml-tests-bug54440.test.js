// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug54440.phpt
  it("Bug #54440: libxml extension ignores default context", function () {
    expect(parser.parseCode("<?php\nclass TestWrapper {\nfunction stream_open($path, $mode, $options, &$opened_path)\n{\n    if ($this->context)\n        print_r(stream_context_get_options($this->context));\n    return false;\n}\nfunction url_stat($path, $flags)\n{\nreturn array();\n}\n}\nstream_wrapper_register(\"test\", \"TestWrapper\")\n    or die(\"Failed to register protocol\");\n$ctx1 = stream_context_create(array('test'=>array('test'=>'test 1')));\n$ctx2 = stream_context_create(array('test'=>array('test'=>'test 2')));\nstream_context_set_default(stream_context_get_options($ctx1));\n@simplexml_load_file('test://sdfsdf');\nlibxml_set_streams_context($ctx2);\n@simplexml_load_file('test://sdfsdf');\n?>")).toMatchSnapshot();
  });
});
