// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_countable.phpt
  it("Test ResourceBundle implements Countable", function () {
    expect(parser.parseCode("<?php\n    include \"resourcebundle.inc\";\n    $r = new ResourceBundle( 'es', BUNDLE );\n    var_dump($r instanceof Countable);\n?>")).toMatchSnapshot();
  });
});
