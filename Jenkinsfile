pipeline {
    agent {
	docker { image 'node: 14-alpine'} 
	}
    stages {
        stage('Prebuild') {
            steps {
		sh  'npm install'
        	 }
	      	}		
      
        stage('Unit test') {
            steps {
		sh 'npm run test-unit'
        	}	
	       }	
      
        stage('Integration test') {
            steps { 
		sh 'npm run test-integration'    
       		  }
     		}		   
   }
 }
