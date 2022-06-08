// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug46711.phpt
  it("Bug #46711 (lost memory when foreach is used for values passed to curl_setopt())", function () {
    expect(parser.parseCode("<?php\n$ch = curl_init();\n$opt = array(\n    CURLOPT_AUTOREFERER  => TRUE,\n    CURLOPT_BINARYTRANSFER => TRUE\n);\ncurl_setopt( $ch, CURLOPT_AUTOREFERER  , TRUE );\nforeach( $opt as $option => $value ) {\n    curl_setopt( $ch, $option, $value );\n}\nvar_dump($opt); // with this bug, $opt[58] becomes NULL\n?>")).toMatchSnapshot();
  });
});
