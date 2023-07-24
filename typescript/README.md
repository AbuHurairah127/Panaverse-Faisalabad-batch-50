# Installations and project starter kits

## Installations:

1.  Install [node js](https://nodejs.org/en/download) LTS (Long Term Supported version) which is **v18.17.0 till (24-jul-2023)**.
2.  To confirm installation open your terminal/ command prompt.And run:

            `node -v`

    and

        `npm -v`

    "npm" is a package manager for Nodejs which is automatically installed with nodejs.  
    **v9.6.7 till (24-jul-2023)**

3.  Run the following command to install [typescript](https://www.typescriptlang.org/play) globally:

                `npm install -g typescript`

or

                `npm i -g typescript`

The second one is shorthand working of both are same.

**v5.1.6 till (24-jul-2023)**

4.  Install [VS Code](https://code.visualstudio.com/),an IDE (Integrated Development Environment) for writing typescript.

## Node Project Starter Kit

1. First of all create a new folder or open an empty folder (select name for folder without space) in the VS CODE.
2. Then open a new terminal. To open terminal you will see a button `terminal` at the top of you VS Code screen click on it and the `new terminal` or press

```shell
ctrl + `
```

and run.(**`** key is present just under the **esc** key.)
**Note (For windows users): By default the terminal profile in the VS code is set to _powershell_. In window powershell has n't much permissions to run typescript compiler. So kindly shift to command prompt or cmd.**

3.           `npm init`

    or

        `npm init -y`

If you are running the first command it will ask you some questions for now ust press enter and go with default values. And the second command will do it automatically for you and after running the command you will get a `package.json` file.

4.  After running it, run:

            `tsc --init`

    A file name `tsconfig.json` will be created.

5.  Now create a file of any name (without space in the name) with an extention of `.ts`. For example, `index.ts`

6.  Code what ever you want or the assignment is given.
7.  Run

        `tsc`

in the same terminal to compile code. After running command you will get file with `.js` extention. Note: the file name will be same as you named it in `.ts` extention. 8. Now run

        `node fileName.js`

(replace fileName with your file name). For example, in my case it will be `node index.js`.

### Best of Luck!
