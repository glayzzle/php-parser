// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jmp_elim_003.phpt
  it("Incorrect empty basic block elimination", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function test($args = array()) {\n        if (!function_exists( 'stream_socket_client'))\n            return false;\n        $is_ssl = isset( $args['ssl'] ) && $args['ssl'];\n        if ($is_ssl) {\n            if (!extension_loaded( 'openssl'))\n                return false;\n            if (!function_exists('openssl_x509_parse'))\n                return false;\n        }\n        return apply_filters('use_streams_transport', true, $args);\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});
