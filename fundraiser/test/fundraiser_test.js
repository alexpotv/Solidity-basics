// Requesting Fundraiser contract from the artifacts object
const FundraiserContract = artifacts.require("Fundraiser");

// contract function makes a fresh deploy of the test network
contract("Fundraiser", accounts => {
    let fundraiser;
    const name = "Beneficiary Name";
    const website_url = "https://website.org";
    const image_url = "https://imgur.com/image";
    const description = "The best fundraiser ever launched"
    const beneficiary = accounts[1];
    const owner = accounts[0];

    beforeEach (async () => {
        fundraiser = await FundraiserContract.new(
            name, website_url, image_url, description, beneficiary, owner);
    });

    describe("initialization", () => {
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

        it("gets the beneficiary address", async () => {
            const actual = await fundraiser.beneficiary();
            assert.equal(actual, beneficiary, "beneficiary addresses should match");
        });

        it("gets the owner", async () => {
            const actual = await fundraiser.owner();
            assert.equal(actual, owner, "owners should match");
        });
    });

    describe("setBeneficiary", () => {
        const newBeneficiary = accounts[2];

        it("updated beneficiary when called by the owner account", async () => {
            await fundraiser.setBeneficiary(newBeneficiary, {from: owner});
            const actualBeneficiary = await fundraiser.beneficiary();
            assert.equal(actualBeneficiary, newBeneficiary, "beneficiaries should match");
        });

        it("throws an error when called from a non-owner account", async () => {
            try {
                await fundraiser.setBeneficiary(newBeneficiary, {from: accounts[3]});
                assert.fail("withdraw was not restricted to owners");
            } catch(err) {
                const expectedError = "Ownable: caller is not the owner";
                const actualError = err.reason;
                assert.equal(actualError, expectedError, "should not be permitted");
            }
        });
    });
});
