pipeline {
	agent any
	stages {
		stage("Prebuild"){
			steps{
					sh  'npm install'
					echo 'Prebuild done'
				}
				post {
					success {
						echo 'Prebuild success'
					}
					failure {
						echo 'Prebuild failed'
					}
				}
			}
		stage('Unit test') {
			steps {
				sh 'npm run test-unit'
				echo 'Unit test done'
			}
			post {
				success {
					echo 'Unit test success'
				}
				failure {
					echo 'Unit test failed'
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
				echo 'Integration test done'
			}
			post {
				success {
					echo 'Integration test success'
				}
				failure {
					echo 'Integration test failed'
				}
			}
		}
		stage('Delivery') {
			when {
				branch 'main'
			}
			steps {
				script {
					docker.withRegistry('https://registry.hub.docker.com', 'docker_id'){
					def im = docker.build("metalmama/express-calculator")
					im.push()
						}	
					}
					echo 'Delivery done'	
				}
				post {
					success {
						echo 'Delivery success'
					}
					failure {
						echo 'Delivery failed'
					}
				}	
			}
		}
	}		
	



