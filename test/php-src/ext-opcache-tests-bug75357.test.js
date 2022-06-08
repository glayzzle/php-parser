// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75357.phpt
  it("Bug #75357 (segfault loading WordPress wp-admin)", function () {
    expect(parser.parseCode("<?php\nfunction wp_slash( $value ) {\n    if ( is_array( $value ) ) {\n        foreach ( $value as $k => $v ) {\n            if ( is_array( $v ) ) {\n                $value[$k] = wp_slash( $v );\n            } else {\n                $value[$k] = addslashes( $v );\n            }\n        }\n    } else {\n        $value = addslashes( $value );\n    }\n    return $value;\n}\nfunction addslashes_gpc($gpc) {\n    return wp_slash($gpc);\n}\nvar_dump(addslashes_gpc(array(array(\"test\"))));\n?>")).toMatchSnapshot();
  });
});
