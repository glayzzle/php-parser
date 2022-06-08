// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/invalid_alias.phpt
  it("Phar: set alias with invalid alias containing / \\ : or ;", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$p = new Phar($fname);\ntry {\n    $p->setAlias('hi/');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $p->setAlias('hi\\\\l');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $p->setAlias('hil;');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $p->setAlias(':hil');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
