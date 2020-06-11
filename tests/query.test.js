import { hello } from "../src/resolvers/query";
describe("hello query", () => {
  test("Returns hello world", async () => {
    const args = "args";
    const context = "context";

    const response = await getAllListings(args, context);
    expect(response).toEqual("Your GraphQL API is now LIVE!🎈");
  });
});
