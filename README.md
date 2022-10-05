#express_calculator (modified) for use in CI/CD pipeline
#node_calculator (original) used as inital template
#epress_calculator repo used in Jenkins multibranch pipeline: multibranch-pipeline-express-calculator
# branches in pipeline:
- develop
- feature/jenkins-config
- feature/docker-delivery
- feature/new-background-colour

#Task spec:
-Grade G:
1. create a CI/CD multibranch pipeline in Jenkins
2. demonstrate a commit to to feature branch - e.g. feature/new-background-colour
3. a) merge commit into development branch
   b) merge commit into main branch 
4. show how all merged commits to main triggers builds in Jenkins

-Grade VG:
5. In addition to the above, the multibranch pipeline demo also includes a delivery step which is activated when a merge to main branch occurs, which in turn pushes a Docker image with the code to Dockerhub. 

