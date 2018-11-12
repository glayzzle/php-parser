const parser = require("../main");

describe("boolean", () => {
  it("simple", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (Exception $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });
  it("finally", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (Exception $e) { do_something(); } finally { do_something_other(); }"
      )
    ).toMatchSnapshot();
  });
  it("miltiple catch", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (MyException | MyOtherException $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });
});
