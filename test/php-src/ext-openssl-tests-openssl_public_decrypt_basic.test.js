// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_public_decrypt_basic.phpt
  it("openssl_public_decrypt() tests", function () {
    expect(parser.parseCode("<?php\n$data = \"Testing openssl_public_decrypt()\";\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$pubkey = \"file://\" . __DIR__ . \"/public.key\";\n$wrong = \"wrong\";\nopenssl_private_encrypt($data, $encrypted, $privkey);\nvar_dump(openssl_public_decrypt($encrypted, $output, $pubkey));\nvar_dump($output);\nvar_dump(openssl_public_decrypt($encrypted, $output2, $wrong));\nvar_dump($output2);\nvar_dump(openssl_public_decrypt($wrong, $output3, $pubkey));\nvar_dump($output3);\ntry {\n    var_dump(openssl_public_decrypt($encrypted, $output4, array()));\n    var_dump($output4);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(openssl_public_decrypt($encrypted, $output5, array($pubkey)));\n    var_dump($output5);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(openssl_public_decrypt($encrypted, $output6, array($pubkey, \"\")));\nvar_dump($output6);\n?>")).toMatchSnapshot();
  });
});
