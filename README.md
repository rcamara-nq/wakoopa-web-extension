# Wakooped Extension

Only for Chrome & Firefox. Testing purposes.

The extension will replace all the images in a website by random pictures of Wakoopa's members.

## Steps to compile for Chrome & Firefox
Ruby >= v2.3, Node and Yarn is needed. First, run
```sh
bundle install
```
and
```sh
yarn install
```
after this you can execute the rake task that will output the packed extension in a ZIP file, run:
```sh
be rake "compile:packed[chrome]"
```

Now you are free to install the extension in Chrome or Firefox.

# Installing on Chrome
Go to the Extensions page in Chrome **chrome://extensions/** while here you should set "Developer Mode" to on, then drag&drop the ZIP file generated for Chrome that should be in build/chrome directory. After that, all is set up and ready to replace all images!!

# Installing on Firefox
For Firefox is different. First because you need the Nightly Build of Firefox and because it does not allow to upload the zip file, instead while in development you should unzip the file build/firefox/firefox.zip and go to **about:debugging#/runtime/this-firefox**, then **Load Temporary Add-on** go to the uncompressed folder and select one of the files and the extension should be installed. Ready to go!

If you don't need the packed version of the extension you can run:
```sh
be rake "compile:unpacked[chrome]"
```
and you will get the folder already prepared to be used as extension.