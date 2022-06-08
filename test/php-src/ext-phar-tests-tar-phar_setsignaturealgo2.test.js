// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/phar_setsignaturealgo2.phpt
  it("Phar::setSupportedSignatures() with hash, tar-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$p = new Phar($fname);\n$p['file1.txt'] = 'hi';\nvar_dump($p->getSignature());\n$p->setSignatureAlgorithm(Phar::MD5);\nvar_dump($p->getSignature());\n$p->setSignatureAlgorithm(Phar::SHA1);\nvar_dump($p->getSignature());\ntry {\n$p->setSignatureAlgorithm(Phar::SHA256);\nvar_dump($p->getSignature());\n} catch (Exception $e) {\necho $e->getMessage();\n}\ntry {\n$p->setSignatureAlgorithm(Phar::SHA512);\nvar_dump($p->getSignature());\n} catch (Exception $e) {\necho $e->getMessage();\n}\ntry {\n$config = __DIR__ . '/../files/openssl.cnf';\n$config_arg = array('config' => $config);\n$private = openssl_get_privatekey(file_get_contents(dirname(__DIR__) . '/files/private.pem'));\n$pkey = '';\nopenssl_pkey_export($private, $pkey, NULL, $config_arg);\n$p->setSignatureAlgorithm(Phar::OPENSSL, $pkey);\nvar_dump($p->getSignature());\n$p->setSignatureAlgorithm(Phar::OPENSSL_SHA512, $pkey);\nvar_dump($p->getSignature());\n$p->setSignatureAlgorithm(Phar::OPENSSL_SHA256, $pkey);\nvar_dump($p->getSignature());\n} catch (Exception $e) {\necho $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
