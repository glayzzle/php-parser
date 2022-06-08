// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/mhash_001.phpt
  it("MHash: mhash() test", function () {
    expect(parser.parseCode("<?php\n$supported_hash_al = array(\n\"MHASH_MD5\"       => \"2d9bdb91f94e96d9c4e2ae532acc936a\",\n\"MHASH_SHA1\"      => \"2f9341e55a9083edf5497bf83ba3db812a7de0a3\",\n\"MHASH_HAVAL256\"  => \"b255feff01ad641b27358dc7909bc695a1fca53bddfdfaf19020b275928793af\",\n\"MHASH_HAVAL192\"  => \"4ce837de481e1e30092ab2c610057094c988dfd7db1e01cd\",\n\"MHASH_HAVAL224\"  => \"5362d1856752bf2c139bb2d6fdd772b9c515c8ce5ec82695264b85e1\",\n\"MHASH_HAVAL160\"  => \"c6b36f87750b18576981bc17b4f22271947bf9cb\",\n\"MHASH_RIPEMD160\" => \"6c47435aa1d359c4b7c6af46349f0c3e1258583d\",\n\"MHASH_GOST\"      => \"101b0a2552cebdf5137cadf15147f21e55b6432935bb9c2c03c7e28d188b2d9e\",\n\"MHASH_TIGER\"     => \"953ac3799a01b9fdeb91aeab97207e67395cbb54300be00d\",\n\"MHASH_CRC32\"     => \"83041db8\",\n\"MHASH_CRC32B\"    => \"df5ab7a4\"\n);\n$data = \"This is the test of the mhash extension...\";\nforeach ($supported_hash_al as $hash=>$wanted) {\n    $result = mhash(constant($hash), $data);\n    if (bin2hex($result)==$wanted) {\n        echo \"$hash\\nok\\n\";\n    } else {\n        echo \"$hash: \";\n        var_dump($wanted);\n        echo \"$hash: \";\n        var_dump(bin2hex($result));\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
