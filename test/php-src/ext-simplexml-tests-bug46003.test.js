// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug46003.phpt
  it("Bug #46003 (isset on nonexisting nodes return unexpected results)", function () {
    expect(parser.parseCode("<?php\n$xml =<<<XML\n<r>\n  <p>Test</p>\n  <o d='h'>\n    <xx rr='info' />\n    <yy rr='data' />\n  </o>\n</r>\nXML;\n$x = simplexml_load_string($xml);\nvar_dump(isset($x->p));\nvar_dump(isset($x->p->o));\nvar_dump(isset($x->o->yy));\nvar_dump(isset($x->o->zz));\nvar_dump(isset($x->o->text));\nvar_dump(isset($x->o->xx));\n?>")).toMatchSnapshot();
  });
});
