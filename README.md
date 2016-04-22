# testnode
Code example for slackbot node network client

======
This project is a example of how to use the [nodeclient](https://github.com/duglah/nodeclient) lib.

## Start
1. Run ```npm install```
2. Start the main node (See https://github.com/duglah/slackbotnode )
3. When your bot node runs an a different machiene edit the host ```client.host = "127.0.0.1";```to your server ip
4. Run ```node app.js```
5. Go to your channel, where your bot is waiting.
6. Write ```@your_bot_name test```

## Other projects
If you would like to control a rgb led strip via your slackbot you should check out https://github.com/duglah/rgbnode .
It is a node which recieves commands from slack and sends them to the [rgb-pi](https://github.com/ryupold/rgb-pi)
(Nice project!) server.

## Todos
* Write documentation
* Clean up code


## License
```
The MIT License (MIT)

Copyright (c) 2016 Philipp Geitz-Manstein

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
