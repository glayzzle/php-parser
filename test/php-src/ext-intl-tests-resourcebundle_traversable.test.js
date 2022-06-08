// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_traversable.phpt
  it("Bug #55610: ResourceBundle does not implement Traversable", function () {
    expect(parser.parseCode("<?php\n    include \"resourcebundle.inc\";\n    $r = new ResourceBundle( 'es', BUNDLE );\n    var_dump($r instanceof Traversable);\n    var_dump(iterator_to_array($r->get('testarray')));\n?>")).toMatchSnapshot();
  });
});
