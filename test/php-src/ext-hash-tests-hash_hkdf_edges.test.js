// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_hkdf_edges.phpt
  it("Hash: hash_hkdf() function: edge cases", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash_hkdf(): edge cases ***\\n\";\n$ikm = 'input key material';\necho 'Length < digestSize: ', bin2hex(hash_hkdf('md5', $ikm, 7)), \"\\n\";\necho 'Length % digestSize != 0: ', bin2hex(hash_hkdf('md5', $ikm, 17)), \"\\n\";\necho 'Algo name case-sensitivity: ', (bin2hex(hash_hkdf('Md5', $ikm, 7)) === '98b16391063ece' ? 'true' : 'false'), \"\\n\";\necho \"Non-crypto algo name case-sensitivity:\\n\";\ntry {\n    var_dump(hash_hkdf('jOaAt', $ikm));\n}\ncatch (\\Error $e) {\n    echo '[Error] ' . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
