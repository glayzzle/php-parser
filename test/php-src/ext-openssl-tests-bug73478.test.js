// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug73478.phpt
  it("Bug #73478: openssl_pkey_new() generates wrong pub/priv keys with Diffie Hellman", function () {
    expect(parser.parseCode("<?php\n$details = [\n    'p' => base64_decode('3Pk6C4g5cuwOGZiaxaLOMQ4dN3F+jZVxu3Yjcxhm5h73Wi4niYsFf5iRwuJ6Y5w/KbYIFFgc07LKOYbSaDcFV31FwuflLcgcehcYduXOp0sUSL/frxiCjv0lGfFOReOCZjSvGUnltTXMgppIO4p2Ij5dSQolfwW9/xby+yLFg6s='),\n    'g' => base64_decode('Ag=='),\n    'priv_key' => base64_decode('jUdcV++P/m7oUodWiqKqKXZVenHRuj92Ig6Fmzs7QlqVdUc5mNBxmEWjug+ObffanPpOeab/LyXwjNMzevtBz3tW4oROau++9EIMJVVQr8fW9zdYBJcYieC5l4t8nRj5/Uu/Z0G2rWVLBleSi28mqqNEvnUs7uxYxrar69lwQYs=')\n];\n$opensslKeyResource = openssl_pkey_new(['dh' => $details]);\n$data = openssl_pkey_get_details($opensslKeyResource);\nprintf(\"Private key:\\n%s\\n\", base64_encode($data['dh']['priv_key']));\nprintf(\"Public key:\\n%s\\n\", base64_encode($data['dh']['pub_key']));\n?>")).toMatchSnapshot();
  });
});
