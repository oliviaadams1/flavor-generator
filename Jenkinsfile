// Declarative //
// pipeline must be top-level
pipeline {
    environment {
        registry = 'oadams123/flavor-generator'
        registryCredential = '7b4fb751-4745-4536-9c03-930a99f268d1'
        dockerImage = ''
    }
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
                dockerImage = docker.build registry
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
                docker.withRegistry('', registryCredential) {
                    dockerImage.push()
                }
                sh 'docker run -d -p 3000:3000 --name flavor-generator'
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
