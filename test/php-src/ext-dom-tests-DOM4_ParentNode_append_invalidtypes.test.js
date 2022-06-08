// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_ParentNode_append_invalidtypes.phpt
  it("DOMParentNode::append() exception on invalid argument", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test />');\ntry {\n    $dom->documentElement->append(array());\n} catch(TypeError $e) {\n    echo \"OK! {$e->getMessage()}\";\n}\n?>")).toMatchSnapshot();
  });
});
