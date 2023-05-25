import { sum } from "./task";
import { lengthWords } from "./task";
import { sumInput } from "./task";

describe("sum", () => {
    it("sum number", () => {
        expect(sum( 5, 4)).toEqual(9);
    })
})

describe("lengthWords", () => {
    it("the sum of the letters of two words", () => {
        expect(lengthWords( "word", "lenght")).toEqual(10);
    })
    it("the sum of the letters of two sentences", () => {
        expect(lengthWords( "enter a proposal", "and calculate its length")).toEqual(40);
    })
    it("the sum of the letters of two numders", () => {
        expect(lengthWords( "2232", "7767")).toEqual(8);
    })
})

describe("sumInput", () => {
    beforeEach(() => {
        window.prompt = jest.fn();
        
    });
    it("three digit input ", () => {
        window.prompt.mockReturnValueOnce("659");
        expect(sumInput()).toEqual(20);
    })
    it("letter entry", () => {
        window.prompt.mockReturnValueOnce("aho");
        expect(sumInput()).toBeUndefined();
    })
    it("entering more than three digits", () => {
        window.prompt.mockReturnValueOnce("12");
        expect(sumInput()).toBeUndefined();
    })
})

//window.alert = jest.fn();
//jest.spyOn(window, 'prompt').mockReturnValue("1")