// Declarative //
// pipeline must be top-level
pipeline {
    // where to execute 
    agent any

    // where work happens - stages and steps 
    // installation stage of pipeline 
    stages {
        stage("install dependencies") {
            // execute scripts - commands 
            steps {
                sh 'npm install'
                echo 'Installing Dependencies..'
            }
        }
        // build stage of pipeline
        stage("build") {
            steps {
                sh 'npm run build'
                echo 'Building application..'
            }
        }
        // start stage of pipeline 
        stage("start") {
            steps {
                sh 'npm start &'
                echo 'Starting Application..'
            }
        }
    }
    // after all stages have completed 
    post {
        // conditionals 
        // if build successful, run the application 
        success {
            echo 'Build Success'
        }
        // if build fails, log failure 
        failure {
            echo 'Build Failed'
        }
    }
}
