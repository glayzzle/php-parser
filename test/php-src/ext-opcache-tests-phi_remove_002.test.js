// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/phi_remove_002.phpt
  it("Phi sources remove 002", function () {
    expect(parser.parseCode("<?php\nfunction func($blogname, $user = '' ) {\n    if (! is_object( $user ) || ( is_object($user) && ( $user->login != $blogname )) ) {\n        test();\n    }\n    $result = array('user' => $user);\n    return true;\n}\n?>\nokey")).toMatchSnapshot();
  });
});
