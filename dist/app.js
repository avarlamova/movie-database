//API KEY: cc5fc055
//http://www.omdbapi.com/?apikey=cc5fc055&
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let film = null;
let year = 2020;
let yearStringified = year;
let filmname = 'Tenet';
let errormsg = null;
let testname = function getName() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch('http://www.omdbapi.com/?apikey=cc5fc055&t=titanic')
            .then((response) => {
            return response.json();
        })
            .then((data) => {
            return JSON.stringify(data.Title);
        });
        return result;
    });
};
/*let promise = fetch('http://www.omdbapi.com/?apikey=cc5fc055&t=titanic')
.then((response) => {
  return response.json();
})
.then((data) => {
  return testname = data.Title;
});*/
console.log(JSON.stringify(testname));
const app = document.getElementById("app");
const p = document.createElement("div");
p.textContent = testname;
app === null || app === void 0 ? void 0 : app.appendChild(p);
