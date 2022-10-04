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
		sh 'npm run test-unit'
		addShortText('Unit test has passed')

         }	
	}	
      
        stage('Integration test') {
            steps { 
		sh 'npm run test-integration';
		addShortText('Integration test has passed')    
     	}
    	}	         
   }
 }			   

