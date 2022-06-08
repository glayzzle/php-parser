// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMImplementation_hasFeature_basic.phpt
  it("DOMImplementation::hasFeature()", function () {
    expect(parser.parseCode("<?php\n$imp = new DOMImplementation();\nvar_dump($imp->hasFeature('Core', '1.0'));\nvar_dump($imp->hasFeature('XML', '2.0'));\n?>")).toMatchSnapshot();
  });
});
