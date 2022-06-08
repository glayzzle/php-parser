// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_private_decrypt_basic.phpt
  it("openssl_private_decrypt() tests", function () {
    expect(parser.parseCode("<?php\n$data = \"Testing openssl_public_decrypt()\";\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$pubkey = \"file://\" . __DIR__ . \"/public.key\";\n$wrong = \"wrong\";\nopenssl_public_encrypt($data, $encrypted, $pubkey);\nvar_dump(openssl_private_decrypt($encrypted, $output, $privkey));\nvar_dump($output);\nvar_dump(openssl_private_decrypt($encrypted, $output2, $wrong));\nvar_dump($output2);\nvar_dump(openssl_private_decrypt($wrong, $output3, $privkey));\nvar_dump($output3);\ntry {\n    var_dump(openssl_private_decrypt($encrypted, $output4, array($privkey)));\n    var_dump($output4);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(openssl_private_decrypt($encrypted, $output5, array($privkey, \"\")));\nvar_dump($output5);\n?>")).toMatchSnapshot();
  });
});
