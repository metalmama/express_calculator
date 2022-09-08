pipeline {
    agent any
    stages {
        stage('Prebuild') {
            steps {
		sh  'npm install'
        	 }
	      	}		
      
        stage('test') {
            steps {
		sh 'npm run test'
        	}	
	       }			   
   }
 }
