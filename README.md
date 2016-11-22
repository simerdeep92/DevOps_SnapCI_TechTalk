# DevOps_SnapCI_TechTalk
<br/>Snap CI is a hosted continuous integration and continuous delivery services from ThoughtWorks.

###Snap CI capabilities:
* Progressively test and get feedback across the full deployment pipeline
* Run tests in parallel
* Immediately debug a failed stage
* Support for Ruby, Javascript, Java, Docker, Python etc.  
* Build on CentOS or Ubuntu
* First-class customer support team
* Full sudo capability offers users the ability to create their own environments
* Closely integrated to GitHub workflow
* Easy deployment with Heroku and AWS
* Clean User Interface

### Getting Started with SnapCI
#### Sign up 
To sign up with Snap, go to [Snap CI](https://www.snap-ci.com) and click on the Login link.
When you sign in, GitHub will ask if you want to give a set of permissions to Snap. After you sign up, SnapCI shows all the repositories that we may choose for continuous integration. 

#### Configuring Build 
When you select a repository to build on Snap, we will attempt to automatically detect some popular configurations for your build. We look for languages versions, build tools files, dependency managers and other conventions that may indicate how your build could be set up.

A sample [Hello-World]() nodejs app which displays Hello World is created. The [test file]() consists of simple test cases. Testing is done using mocha. The pipeline run the test cases and passes or fails depending on the test results.

Below are the steps to configure for a nodejs app. The pipeline consists of 2 stages - Testing and Deployment.

* TESTSTAGE is added with the following tasks 

<pre><code>
sudo npm install -g mocha --save-dev
npm install
npm test
</code></pre>
![Test]()
* For deployment Go to Heroku website sign in/up to the account and create a new app. Add a new stage in Snap CI pipeline named Deploy. Enter Heroku credentials and select the heroku app you want to deploy to.
![Deploy]()


Screencast 
[Link](https://drive.google.com/file/d/0B4s9cWAWOC29bWZtd1gwQUYyWWc/view?usp=sharing)

