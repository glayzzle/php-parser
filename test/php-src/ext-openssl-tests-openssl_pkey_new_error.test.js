// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkey_new_error.phpt
  it("openssl_pkey_new() error tests", function () {
    expect(parser.parseCode("<?php\n/* openssl_pkey_get_details() segfaults when getting the information\n    from openssl_pkey_new() with an empty sub-array arg \t\t*/\n$rsa = array(\"rsa\" => array());\n$dsa = array(\"dsa\" => array());\n$dh = array(\"dh\" => array());\ntry {\n    openssl_pkey_get_details(openssl_pkey_new($rsa));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    openssl_pkey_get_details(openssl_pkey_new($dsa));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    openssl_pkey_get_details(openssl_pkey_new($dh));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
