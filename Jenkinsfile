pipeline {
    agent any
    stages {
        stage('Build') {
            steps { 
                echo 'Building..'
                sh 'npm install' 
                sh 'npm install pm2@latest'
                sh 'pm2 start index.js' 
            }
        }
    }
}