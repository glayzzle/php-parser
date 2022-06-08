// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_ssl_set.phpt
  it("mysqli_ssl_set() - test is a stub!", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*\n    This function always returns TRUE value.\n    $link = mysqli_init();\n    if (NULL !== ($tmp = @mysqli_ssl_set(\n        $link,\n        'The path name to the key file.',\n        'The path name to the certificate file.',\n        'The path name to the certificate authority file.',\n        'The pathname to a directory that contains trusted SSL CA certificates in PEM format.',\n        'A list of allowable ciphers to use for SSL encryption.')))\n        printf(\"[007] Expecting boolean/true, got %s/%s\\n\", gettype($tmp), $tmp);\n    If SSL setup is incorrect my_mysqli_real_connect()\n    will return an error when you attempt to connect.\n    ... and the above SSL setup should be always incorrect.\n    if (false !== ($tmp = my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)))\n        printf(\"[008] Expecting boolean/false, got %s/%s\\n\", gettype($tmp), $tmp);\n    */\n    print \"done!\\n\";\n?>")).toMatchSnapshot();
  });
});
