// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/pharfileinfo_compression.phpt
  it("Phar: PharFileInfo compression-related methods", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$pname = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar['a/b'] = 'hi there';\n$b = $phar['a/b'];\ntry {\n$b->isCompressed(25);\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$b->compress(25);\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n$tar = $phar->convertToData(Phar::TAR);\n$c = $tar['a/b'];\ntry {\n$c->compress(Phar::GZ);\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$phar['a']->compress(Phar::GZ);\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\nini_set('phar.readonly', 1);\ntry {\n$b->compress(Phar::GZ);\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\nini_set('phar.readonly', 0);\nvar_dump($b->compress(Phar::GZ));\nvar_dump($b->compress(Phar::GZ));\nvar_dump($b->compress(Phar::BZ2));\nvar_dump($b->compress(Phar::BZ2));\necho \"decompress\\n\";\nini_set('phar.readonly', 1);\ntry {\n$phar['a/b']->decompress();\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\nini_set('phar.readonly', 0);\ntry {\n$phar['a']->decompress();\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\nvar_dump($b->decompress());\nvar_dump($b->decompress());\n?>")).toMatchSnapshot();
  });
});
