// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/pharfileinfo_setmetadata.phpt
  it("Phar: PharFileInfo::setMetadata/delMetadata extra code coverage", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$pname = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar['a/b'] = 'hi there';\n$tar = $phar->convertToData(Phar::TAR);\n$b = $phar['a/b'];\ntry {\n$phar['a']->setMetadata('hi');\n} catch (Exception $e) {\necho $e->getMessage(), \"\\n\";\n}\ntry {\n$phar['a']->delMetadata();\n} catch (Exception $e) {\necho $e->getMessage(), \"\\n\";\n}\nini_set('phar.readonly', 1);\ntry {\n$b->setMetadata('hi');\n} catch (Exception $e) {\necho $e->getMessage(), \"\\n\";\n}\ntry {\n$b->delMetadata();\n} catch (Exception $e) {\necho $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
