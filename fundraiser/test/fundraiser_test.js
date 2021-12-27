// Requesting Fundraiser contract from the artifacts object
const FundraiserContract = artifacts.require("Fundraiser");

// contract function makes a fresh deploy of the test network
contract("Fundraiser", accounts => {
    let fundraiser;
    const name = "Beneficiary Name";
    const website_url = "https://website.org";
    const image_url = "https://imgur.com/image";
    const description = "The best fundraiser ever launched"

    describe("Initialization", () => {
        beforeEach (async () => {
            fundraiser = await FundraiserContract.new(
                name, website_url, image_url, description);
        });

        it("gets the beneficiary name", async () => {
            const actual = await fundraiser.name();
            assert.equal(actual, name, "names should match");
        });

        it("gets the website URL", async () => {
            const actual = await fundraiser.website_url();
            assert.equal(actual, website_url, "website URLs should match");
        });

        it("gets the image URL", async () => {
            const actual = await fundraiser.image_url();
            assert.equal(actual, image_url, "image URLs should match");
        });

        it("gets the description", async () => {
            const actual = await fundraiser.description();
            assert.equal(actual, description, "descriptions should match");
        });
    });
});
