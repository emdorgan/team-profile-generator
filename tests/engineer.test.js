const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
    it("Making a new instance of the class should return an object", () => {
        const obj = new Engineer("", "2", "");

        expect(typeof(obj)).toBe("object");
    });
    it("Engineer object should properly inherit ALL employee object proprerites and methods", () => {
        const name = "django";
        const id = "12";
        const email = "email";
        const obj = new Engineer(name, id, email);
        
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.getName()).toBe(name);
        expect(obj.getId()).toBe(id);
        expect(obj.getEmail()).toBe(email);
    });
    it("Should get a Github if passed as the 4th argument and getGithub should return it", () => {
        const git = "git"
        const obj = new Engineer("", "2", "", git);

        expect(obj.github).toBe(git);
        expect(obj.getGithub()).toBe(git);
    });
    it("Role should overwrite and be Engineer", () => {
        const obj = new Engineer();
        
        expect(obj.getRole()).toBe("Engineer");
    });
});