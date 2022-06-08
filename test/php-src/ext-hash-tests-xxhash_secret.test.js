// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/xxhash_secret.phpt
  it("Hash: xxHash secret", function () {
    expect(parser.parseCode("<?php\nforeach ([\"xxh3\", \"xxh128\"] as $a) {\n\t//$secret = random_bytes(256);\n\t$secret = str_repeat('a', 256);\n\ttry {\n\t\t$ctx = hash_init($a, options: [\"seed\" => 24, \"secret\" => $secret]);\n\t} catch (Throwable $e) {\n\t\tvar_dump($e->getMessage());\n\t}\n\ttry {\n\t\t$ctx = hash_init($a, options: [\"secret\" => str_repeat('a', 17)]);\n\t} catch (Throwable $e) {\n\t\tvar_dump($e->getMessage());\n\t}\n\t$ctx = hash_init($a, options: [\"secret\" => $secret]);\n\thash_update($ctx, \"Lorem\");\n\thash_update($ctx, \" ipsum dolor\");\n\thash_update($ctx, \" sit amet,\");\n\thash_update($ctx, \" consectetur adipiscing elit.\");\n\t$h0 = hash_final($ctx);\n\t$h1 = hash($a, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\", options: [\"secret\" => $secret]);\n\techo $h0 , \" == \", $h1, \" == \", (($h0 == $h1) ? \"true\" : \"false\"), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
