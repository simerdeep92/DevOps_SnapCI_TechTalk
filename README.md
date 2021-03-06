##Snap CI

####Arpita Awasthi 
####Simerdeep Singh Jolly
<br/>Snap CI is a hosted continuous integration and continuous delivery services from ThoughtWorks.

####Presentation - [link](https://docs.google.com/presentation/d/1ekykpxVtZFB47vipbAEqH8b1nS_TC6tdUHHFi8S-zqQ/edit?ts=58348909#slide=id.p3)
####Screencast - [link](https://drive.google.com/file/d/0B4s9cWAWOC29bWZtd1gwQUYyWWc/view?usp=sharing)

###Snap CI capabilities:
* Automatic test parallelization
* Immediate Debugging
* Seamless Github Integration
* Automatic Branch Tracking
* Pull-Request Integration
* Reliable Deployments
* Stage History

### Getting Started with SnapCI
#### Sign up 
To sign up with Snap, go to [Snap CI](https://www.snap-ci.com) and click on the Login link.
When you sign in, GitHub will ask if you want to give a set of permissions to Snap. After you sign up, SnapCI shows all the repositories that we may choose for continuous integration. 

#### Configuring Build 
When you select a repository to build on Snap, we will attempt to automatically detect some popular configurations for your build. We look for languages versions, build tools files, dependency managers and other conventions that may indicate how your build could be set up.

A sample [Hello-World](https://github.com/simerdeep92/DevOps_SnapCI_TechTalk/blob/master/app.js) nodejs app which displays Hello World is created. The [test file](https://github.com/simerdeep92/DevOps_SnapCI_TechTalk/blob/master/test/test.js) consists of simple test cases. Testing is done using mocha. The pipeline run the test cases and passes or fails depending on the test results.

Below are the steps to configure for a nodejs app. The pipeline consists of 2 stages - Testing and Deployment.

* TESTSTAGE is added with the following tasks 

<pre><code>
sudo npm install -g mocha --save-dev
npm install
npm test
</code></pre>

![Test](https://github.com/simerdeep92/DevOps_SnapCI_TechTalk/blob/master/Images/teststage.JPG)
* For deployment Go to Heroku website sign in/up to the account and create a new app. Add a new stage in Snap CI pipeline named Deploy. Enter Heroku credentials and select the heroku app you want to deploy to.

![Deploy](https://github.com/simerdeep92/DevOps_SnapCI_TechTalk/blob/master/Images/deploy.JPG)

### Comparison with Jenkins
|             Jenkins                               |                    Snap CI                        |
|---------------------------------------------------| --------------------------------------------------- 
| Hosted internally                                 |               Cloud Based                         |      
| Free open source                                  |               Free for 30 days                    |
| Great to build, deploy or launch anything async   |     Easy Installations and  simple management |
| Rich set of plugins with good documentation       |           Automatic Github branch tracking
| Tons of integrations                              |         Integration with Github, Heroku, AWS|
| Has support for build pipelines                   |       Multi Stage Pipelines|
| Open source and tons of integrations              |    Debugging mode while building and deployment|

### Limitations 
* Not open source.
* Easy to use but less integration capabilities than Jenkins
* Only integrated with Github.
* Deployment limited to AWS and Heroku.
* No IDE Plugins available.
