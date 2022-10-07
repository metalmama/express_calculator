pipeline {
	agent any
	stages {
		stage("Prebuild"){
			steps{
				sh  'npm install'
				echo "========executing Prebuild========"
				}
			post{
				always{
					echo "========Prebuild executed? ========"
				}
				success{
					echo "========Prebuild executed successfully========"
				}
				failure{
					echo "========Prebuild execution failed========"
				}
			}
		}
		
		stage('Unit test') {
        	steps {
        	sh 'npm run test-unit'
			echo "========executing Unit test========"
			}	
			post {
				always {
					echo "========Unit test executed?========"
				}
				success {
					echo "========Unit test executed successfully========"
				}
				failure {
					echo "========Unit test execution failed========"
				}
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
				echo "========executing Integration Test========"
				}
				post {
				always {
					echo "========Integration executed?========"
				}
				success {
					echo "========Integration Test executed successfully========"
				}
				failure {
					echo "========Integration Test execution failed========"
				}
			}
		}
		
		stage ('Delivery') {
			when {
				branch 'main'
				}	
			docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {   
				def image = docker.build("metalama/express-calculator-cicd-coursework")
				image.push()
			}	
			steps{	
					echo "========executing Delivery========"
				}
			
				post {
					always {
						echo "========Delivery executed?========"
					}
					success {
						echo "========Delivery executed successfully========"
					}
					failure {
						echo "========Delivery execution failed========"
					}
				}	
			}
		}
	}

