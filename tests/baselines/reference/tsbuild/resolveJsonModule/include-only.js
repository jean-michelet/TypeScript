currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/src/hello.json]
{
  "hello": "world"
}

//// [/src/src/index.ts]
import hello from "./hello.json"
export default hello.hello


//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "moduleResolution": "node",
    "module": "commonjs",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "outDir": "dist",
    "skipDefaultLibCheck": true
  },
  "include": [
    "src/**/*"
  ]
}



Output::
/lib/tsc --b /src/tsconfig.json --v --explainFiles --listEmittedFiles
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/dist/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/src/index.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS6307: [0mFile '/src/src/hello.json' is not listed within the file list of project '/src/tsconfig.json'. Projects must list all files or use an 'include' pattern.

[7m1[0m import hello from "./hello.json"
[7m [0m [91m                  ~~~~~~~~~~~~~~[0m

TSFILE: /src/dist/src/hello.json
TSFILE: /src/dist/src/index.js
TSFILE: /src/dist/src/index.d.ts
TSFILE: /src/dist/tsconfig.tsbuildinfo
lib/lib.d.ts
  Default library for target 'es5'
src/src/hello.json
  Imported via "./hello.json" from file 'src/src/index.ts'
src/src/index.ts
  Matched by include pattern 'src/**/*' in 'src/tsconfig.json'

Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped


//// [/src/dist/src/hello.json]
{
    "hello": "world"
}


//// [/src/dist/src/index.d.ts]
declare const _default: string;
export default _default;


//// [/src/dist/src/index.js]
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hello_json_1 = __importDefault(require("./hello.json"));
exports.default = hello_json_1.default.hello;


//// [/src/dist/tsconfig.tsbuildinfo]
{"fileNames":["../../lib/lib.d.ts","../src/hello.json","../src/index.ts"],"fileIdsList":[[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"6651571919-{\n  \"hello\": \"world\"\n}",{"version":"-6443385642-import hello from \"./hello.json\"\nexport default hello.hello\n","signature":"6785192742-declare const _default: string;\nexport default _default;\n"}],"root":[3],"options":{"allowSyntheticDefaultImports":true,"composite":true,"esModuleInterop":true,"module":1,"outDir":"./","skipDefaultLibCheck":true},"referencedMap":[[3,1]],"latestChangedDtsFile":"./src/index.d.ts","errors":true,"version":"FakeTSVersion"}

//// [/src/dist/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../lib/lib.d.ts",
    "../src/hello.json",
    "../src/index.ts"
  ],
  "fileIdsList": [
    [
      "../src/hello.json"
    ]
  ],
  "fileInfos": {
    "../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "../src/hello.json": {
      "version": "6651571919-{\n  \"hello\": \"world\"\n}",
      "signature": "6651571919-{\n  \"hello\": \"world\"\n}"
    },
    "../src/index.ts": {
      "original": {
        "version": "-6443385642-import hello from \"./hello.json\"\nexport default hello.hello\n",
        "signature": "6785192742-declare const _default: string;\nexport default _default;\n"
      },
      "version": "-6443385642-import hello from \"./hello.json\"\nexport default hello.hello\n",
      "signature": "6785192742-declare const _default: string;\nexport default _default;\n"
    }
  },
  "root": [
    [
      3,
      "../src/index.ts"
    ]
  ],
  "options": {
    "allowSyntheticDefaultImports": true,
    "composite": true,
    "esModuleInterop": true,
    "module": 1,
    "outDir": "./",
    "skipDefaultLibCheck": true
  },
  "referencedMap": {
    "../src/index.ts": [
      "../src/hello.json"
    ]
  },
  "latestChangedDtsFile": "./src/index.d.ts",
  "errors": true,
  "version": "FakeTSVersion",
  "size": 1062
}

