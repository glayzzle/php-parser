// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug27010.phpt
  it("Bug #27010 (segfault and node text not displayed when returned from children())", function () {
    expect(parser.parseCode("<?php\n$xml=<<<EOF\n<drinks xmlns:hot=\"http://www.example.com/hot\">\n <hot:drink><hot:name>Coffee</hot:name></hot:drink>\n <hot:drink><hot:name>Tea</hot:name></hot:drink>\n <drink><name>Cola</name></drink>\n <drink><name>Juice</name></drink>\n</drinks>\nEOF;\n$sxe = simplexml_load_string($xml);\nforeach ($sxe as $element_name => $element) {\n    print \"$element_name is $element->name\\n\";\n}\nforeach ($sxe->children('http://www.example.com/hot') as $element_name => $element) {\n    print \"$element_name is $element->name\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
