// Declarative //
// pipeline must be top-level
pipeline {
    // where to execute 
    agent any

    // where work happens - stages and steps 
    // installation stage of pipeline 
    stages {
        stage("Install Dependencies") {
            // execute scripts - commands 
            steps {
                sh 'npm install'
                echo 'Installing Dependencies..'
            }
        }
        // build stage of pipeline
        stage("Build") {
            steps {
                sh 'npm run build'
                echo 'Building application..'
            }
        }
        // test stage of pipeline - if I had tests to run
        stage("Test") {
            steps {
                sh 'npm test'
                echo 'Testing Application..'
            }
        }
        // deploy application - if all steps have been successful, deploy new code
        stage("Deploy") {
            steps {
                sh 'serve -s build &'
                // open application url 
                sh 'start http://localhost:3000'
                echo 'Deploying Application..'
            }
        }
    }
    // after all stages have completed 
    post {
        // conditionals 
        // if build successful 
        success {
            echo 'Build Success'
        }
        // if build fails
        failure {
            echo 'Build Failed'
        }
    }
}
