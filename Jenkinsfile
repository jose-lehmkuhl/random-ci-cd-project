pipeline {
    agent any
    stages {
        stage('Build') {
            steps { 
                echo 'Building app'
                sh 'npm install' 
                sh 'pm2 start server.js' 
            }
        }
        stage('Upload Docker') {
            steps { 
                echo 'Building docker image'
                sh 'docker build . -t capstoneAPI' 
                sh 'docker tag capstoneAPI joselehmkuhl/capstoneAPI' 
                sh 'docker push joselehmkuhl/capstoneAPI'
            }
        }
    }
}