pipeline{
	agent any
	stages{
		stage("Prebuild"){
			steps{
				sh  'npm install'
				echo "========executing Prebuild========"
				}
			post{
				always{
					echo "========always========"
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
					echo "========always========"
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
					echo "========always========"
				}
				success {
					echo "========Integration Test executed successfully========"
				}
				failure {
					echo "========Integration Test execution failed========"
				}
			}
		}
		stage ('Deploy') {
			when {	
        		branch 'main'	
			}
			steps {
				sh 'npm run deploy'
			echo "========executing Deploy========"
			}
			post {
				always {
					echo "========always========"
				}
				success {
					echo "========Deploy executed successfully========"
				}
				failure {
					echo "========Deploy execution failed========"
				}
			}
		}
	}
}
