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
                sh 'serve -s build'
                echo 'Building application..'
            }
        }
        // test stage of pipeline - if I had tests to run
        stage("Test") {
            steps {
                echo 'Testing Application..'
            }
        }
        // deploy application - if all steps were successful, build app
        stage("Deploy") {
            steps {
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
