# Description

This Web Serveice get a request on '/count' , for example
'''
/count?array=1,2,3,3,3,1
'''
and counts the elements of the array query key,and respond with the element count in a json format.

## How to run it

To run this service run the file './bin/www'

'''shell
node ./bin/www
'''

dont forgote to install the packages.

'''shell
npm install
'''
the service server lisens to the port number 3000

## The content

'''
.
├── app.js // the main programe
├── bin
│   └── www
├── count.js // the logic of the sevice
├── count-test.js // test cases for count.js
├── package.json
├── package-lock.json
├── README.md
└── routes
    └── count.js //the app only router
'''