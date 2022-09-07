pipeline {
    agent any
    stages {
        stage('Prebuild') {
            steps {
		sh  'npm install'
        }
      }

        stage('Unit test') {
            steps {
		sh 'npm run unit-test'
        }
      }

        stage('Integration test') {
            steps { 
		sh 'npm run integration-test'    
        }
      }
   }
}

