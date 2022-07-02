// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62991.phpt
  it("Bug #62991 (Segfault with generator and closure)", function () {
    expect(parser.parseCode("<?php\nfunction test( array $array )\n{\n    $closure = function() use ( $array ) {\n        print_r( $array );\n        yield \"hi\";\n    };\n    return $closure();\n}\nfunction test2( array $array )\n{\n    $closure = function() use ( $array ) {\n        print_r( $array );\n        yield \"hi\";\n    };\n    return $closure; // if you return the $closure and call it outside this function it works.\n}\n$generator = test(array( 1, 2, 3 ) );\nforeach($generator as $something) {\n}\n$generator = test2(array( 1, 2, 3 ) );\nforeach($generator() as $something) {\n}\n$generator = test2(array( 1, 2, 3 ) );\necho \"okey\\n\";\n?>")).toMatchSnapshot();
  });
});
