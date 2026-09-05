pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'node --test tests/medcare.test.js'
            }
        }

        stage('Build Application') {
            steps {
                bat 'npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css'
            }
        }
    }
}