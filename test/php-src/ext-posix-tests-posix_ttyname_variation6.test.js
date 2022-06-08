// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ttyname_variation6.phpt
  it("Test function posix_ttyname() by substituting argument 1 with object values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with object values ***\\n\";\nclass classWithToString\n{\n        public function __toString() {\n                return \"Class A object\";\n        }\n}\nclass classWithoutToString\n{\n}\n$variation_array = array(\n  'instance of classWithToString' => new classWithToString(),\n  'instance of classWithoutToString' => new classWithoutToString(),\n  );\nforeach ( $variation_array as $var ) {\n  var_dump(posix_ttyname( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
