pipeline {
    agent any
    stages {
        stage('Build') {
            steps { 
                echo 'Building..'
                sh 'npm install' 
                sh 'pm2 start server.js' 
            }
        }
    }
}