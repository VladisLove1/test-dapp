# test-dapp
To launch the project, you must have all these dependencies installed:
 - Nodejs v9.x.x
 - npm v5.x.x
 - Truffle v4.x.x
 - web3js v0.2.x
 - ganache-cli 
 - jQuery
 - MetaMask (Chrome Extension)

Then you should do following:
 1. In the Terminal, make a directory of your project and go in it.
 2. While in the directory, initialize git repo and do “git pull <URL>”.
 3. Run your Ganache client like “sudo ganache-cli .”
 4. You can now open your MetaMask, click “restore from mnemonic” and paste there your mnemonic phrase from ganache.
 5. Open another terminal and go to your project directory.
 6. Compile and deploy contracts (truffle compile && truffle migrate <--reset>)
 7. Now do this command “sudo npm run dev” and the Application will appear in new window of your default browser.

In MetaMask you can create an account, copy its address to clipboard and switch back to the 1st account (the owner). 
In the corresponding fields paste the pre-copied address and a desired amount of tokens and click the transfer button, then submit the action through MetaMask.

If you have your MetaMask approving transactions for too long, just use JS promises and truffle console, e.g.:

TestToken.deployed().then(function(instance){app = instance;})

app.address //to test if it works, this command must show you the address of your contract

app.transfer("address", amount)
