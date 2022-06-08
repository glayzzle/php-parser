// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/negative_scale.phpt
  it("all errors on negative scale", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcadd('1','2',-1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bcsub('1','2',-1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bcmul('1','2',-1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bcdiv('1','2',-1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bcmod('1','2',-1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bcpowmod('1', '2', '3', -9);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bcpow('1', '2', -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bcsqrt('9', -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bccomp('1', '2', -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    bcscale(-1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
