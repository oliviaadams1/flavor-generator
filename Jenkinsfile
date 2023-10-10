// Declarative //
// pipeline must be top-level
pipeline {
    // where to execute 
    agent any

    // where work happens - stages and steps 
    stages {
        stage("build") {
            // execute scripts - commands 
            steps {
                sh 'npm install'
                echo 'Building Application..'
            }
        }
        stage("test") {
            steps {
                echo 'Testing Application..'
            }
        }
        
        stage("deploy") {
            steps {
                echo 'Deploying Application..'
            }
        }
    }
    // after all stages have completed 
    post {
        // conditionals 
        success {
            sh 'npm start'
            echo 'Build Success'
        }
        failure {
            echo 'Build Failed'
        }
    }
}
