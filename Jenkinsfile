pipeline { 
   agent any 
  stages {
        stage('Build') {
            agent {
		docker {
		image 'gradle:6,7-jdk11'
		//Run the container on the node specified at the top-level
		reuseNode true
                
            }
        }
	steps {
		sh 'gradle --version'    
}
}
}
}	
