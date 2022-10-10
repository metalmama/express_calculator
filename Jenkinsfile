pipeline {
	agent any
	stages {
		stage("Prebuild"){
			steps{
				sh  'npm install'
				}
			}
		stage('Unit test') {
        	steps {
        	sh 'npm run test-unit'
			}
		}	
        stage('Integration test') {
			when {
				anyOf {
				branch 'develop';
				branch 'main'
				}
			}	
			steps {
			sh 'npm run test-integration'
			}
		}
		stage('Delivery') {
			when {
				branch 'main'
			}
			steps {
				script {
					docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
					def im = docker.build("dockerhub/metalmama/express-calculator")
					im.push()
						}	
					}	
				}
			}
		}
	}		



