// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug35022.phpt
  it("Bug #35022 (Regression in the behavior of key/current functions)", function () {
    expect(parser.parseCode("<?php\n$state = array(\"one\" => 1, \"two\" => 2, \"three\" => 3);\nfunction foo( &$state ) {\n    $contentDict = end( $state );\n    for ( $contentDict = end( $state ); $contentDict !== false; $contentDict = prev( $state ) ) {\n    echo key($state) . \" => \" . current($state) . \"\\n\";\n    }\n}\nfoo($state);\nreset($state);\nvar_dump( key($state), current($state) );\n?>")).toMatchSnapshot();
  });
});
