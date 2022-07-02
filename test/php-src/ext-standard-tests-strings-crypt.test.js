// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/crypt.phpt
  it("crypt() function", function () {
    expect(parser.parseCode("<?php\n$str = 'rasmuslerdorf';\n$salt1 = 'rl';\n$res_1 = 'rl.3StKT.4T8M';\n$salt2 = '_J9..rasm';\n$res_2 = '_J9..rasmBYk8r9AiWNc';\n$salt3 = '$1$rasmusle$';\n$res_3 = '$1$rasmusle$rISCgZzpwk3UhDidwXvin0';\n$salt4 = '$2a$07$rasmuslerd............';\n$res_4 = '$2a$07$rasmuslerd............nIdrcHdxcUxWomQX9j6kvERCFjTg7Ra';\necho (CRYPT_STD_DES)  ? ((crypt($str, $salt1) === $res_1) ? 'STD' : 'STD - ERROR') : 'STD', \"\\n\";\necho (CRYPT_EXT_DES)  ? ((crypt($str, $salt2) === $res_2) ? 'EXT' : 'EXT - ERROR') : 'EXT', \"\\n\";\necho (CRYPT_MD5)      ? ((crypt($str, $salt3) === $res_3) ? 'MD5' : 'MD5 - ERROR') : 'MD5', \"\\n\";\necho (CRYPT_BLOWFISH) ? ((crypt($str, $salt4) === $res_4) ? 'BLO' : 'BLO - ERROR') : 'BLO', \"\\n\";\ntry {\n    var_dump(crypt($str));\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
