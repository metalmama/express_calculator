pipeline {
	agent any
	stages {
		stage("Prebuild"){
			steps{
				sh  'npm install'
				echo "========executing Prebuild========"
				}
			}
		}
		stage('Unit test') {
        	steps {
        	sh 'npm run test-unit'
			echo "========executing Unit test========"
			}
		}
			}	
        stage('Integration test') {
			when {
				anyOf {
				branch 'develop';
				branch 'main'
				}
			steps {
			sh 'npm run test-integration'
			echo "========executing Integration Test========"
			}
		stage('Delivery') {
			when {
				branch 'main'
				}
			steps {
				docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {   
				def image = docker.build("metalama/express-calculator-cicd-coursework")
				image.push()	

				}
			}
			
				}
			}
		}
	
