pipeline {
    agent any
    stages {
        stage('Prebuild') {
            steps {
                sh  'npm install'
         }
        }

        stage('Unit test') {
            when {
            blsranch 'feature/*'
            }
            
            steps {
                sh 'npm run test-unit'
         }
        }

        stage('Integration test') {
            when {
            anyOf {
            branch 'develop';
            branch 'main'}
                   }
            steps {
                sh 'npm run test-integration'
         }
        }
  }
}

