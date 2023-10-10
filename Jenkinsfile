// Declarative //
// pipeline must be top-level
pipeline {
    // where to execute 
    agent any

    // where work happens - stages and steps 
    // build stage of pipeline 
    stages {
        stage("build") {
            // execute scripts - commands 
            steps {
                sh 'npm install'
                echo 'Building Application..'
            }
        }
        // test stage of pipeline
        stage("test") {
            steps {
                echo 'Testing Application..'
            }
        }
        // deploy stage of pipeline 
        stage("deploy") {
            steps {
                echo 'Deploying Application..'
            }
        }
    }
    // after all stages have completed 
    post {
        // conditionals 
        // if build successful, run the application 
        success {
            bat 'start npm run start'
            echo 'Build Success'
        }
        // if build fails, log failure 
        failure {
            echo 'Build Failed'
        }
    }
}
