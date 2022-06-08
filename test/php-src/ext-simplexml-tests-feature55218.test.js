// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/feature55218.phpt
  it("Bug #55218 getDocNamespaces from current element and not root", function () {
    expect(parser.parseCode("<?php\n$x = new SimpleXMLElement(\n'<?xml version=\"1.0\" standalone=\"yes\"?>\n<people xmlns:p=\"http://example.org/p\" >\n    <person id=\"1\" xmlns:t=\"http://example.org/t\" >\n                <t:name>John Doe</t:name>\n        </person>\n    <person id=\"2\">Susie Q. Public</person>\n    <o>\n                <p:div>jdslkfjsldk jskdfjsmlkjfkldjkjflskj kljfslkjf sldk</p:div>\n        </o>\n</people>');\necho \"getDocNamespaces\\n\";\necho \"\\nBackwards Compatibility:\\n\";\necho \"recursion:\\n\";\nvar_dump ( $x->getDocNamespaces(true) ) ;\nvar_dump( $x->person[0]->getDocNamespaces(true) );\nvar_dump( $x->person[1]->getDocNamespaces(true) );\necho \"\\nnon recursive:\\n\";\nvar_dump( $x->getDocNamespaces(false) );\nvar_dump( $x->person[0]->getDocNamespaces(false) );\nvar_dump( $x->person[1]->getDocNamespaces(false) );\necho \"\\n\\nUsing new 'from_root' bool set to false:\\n\";\necho \"recursion:\\n\";\nvar_dump ( $x->getDocNamespaces(true, false) ) ;\nvar_dump( $x->person[0]->getDocNamespaces(true, false) );\nvar_dump( $x->person[1]->getDocNamespaces(true, false) );\necho \"\\nnon recursive:\\n\";\nvar_dump( $x->getDocNamespaces(false, false) );\nvar_dump( $x->person[0]->getDocNamespaces(false, false) );\nvar_dump( $x->person[1]->getDocNamespaces(false, false) );\n?>")).toMatchSnapshot();
  });
});
