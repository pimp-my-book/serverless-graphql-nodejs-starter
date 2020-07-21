import { hello } from "../src/resolvers/query";
describe("hello query", () => {
  test("Returns hello world", async () => {
    const args = "args";
    const context = "context";

    const response = await hello(args, context);
    expect(response).toContain("Your GraphQL API is now LIVE!🎈");
  });
});
