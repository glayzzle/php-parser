// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/apache_response_headers.phpt
  it("apache_response_headers()", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$test_file = __DIR__ . DIRECTORY_SEPARATOR .\"apache_response_headers.test.php\";\n$code  = '<?php';\n$code .= '\nheader( \"X-Robots-Tag : noindex,nofollow,noarchive\" );\nheader( \"Content-type: text/html; charset=UTF-8\" );\nheader( \"Bad-header\" );\nheader( \" : \" );\nheader( \":\" );\nflush();\nvar_dump( apache_response_headers() );\n?>\n';\nfile_put_contents( $test_file, $code );\npassthru( \"$php -n -q \" . escapeshellarg( $test_file ) );\n?>")).toMatchSnapshot();
  });
});
