pipeline {
    /*agent { 
        label 'kubepods' 
    }*/
    agent any
    tools {
        nodejs "NodeJS"
        //'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'docker'
        }
    environment {
        dockerImage=""
        registry="rodrigoarcos/image-repository:latest"
        /*registry = "react-app"
        dockerImage = ""
        DOCKER_CERT_PATH = credentials('dockerHub')*/ 
    }
    stages {
        stage('1) Checkout Source'){

            steps{
                /*git branch: 'master',
                credentialsId: 'a4c30d80-5621-4de7-ac76-7b3b92cb6d14',
                url: 'git@github.com:Rodrigo-Arcos/React-Express.git']*/
                git credentialsId: 'a4c30d80-5621-4de7-ac76-7b3b92cb6d14', url: 'git@github.com:Rodrigo-Arcos/React-Express.git'
            }
        }
        stage('2.1) Docker build'){
            steps {
                script{
                    dockerImage=docker.build registry
                    //sh 'docker version'
                }
                withCredentials([string(credentialsId: 'DOCKER_HUB', variable: 'PASSWORD')]) {
                    sh 'docker login -u rodrigoarcos -p $PASSWORD'
                }
            
            }
            //sh 'docker build -t jhooq-docker-demo .'
            //sh 'docker image list'
            //sh 'docker tag jhooq-docker-demo rahulwagh17/jhooq-docker-demo:jhooq-docker-demo'
        }
        stage ('2.2) Push image in repository'){
            steps {
                sh 'docker push rodrigoarcos/image-repository:latest'
            }
        }
        stage ('3) Deploy in minikube'){
            steps {
                script {
                    kubernetesDeploy(configs: "myweb.yaml", kubeconfigId: "mykubeconfig1")
                }
            }
        }
        /*stage('Deploy App to Kubernetes') {     
            steps {
                container('kubepods') {
                    withCredentials([file(credentialsId: 'mykubeconfig', variable: 'KUBECONFIG')]) {
                        sh 'sed -i "s/<TAG>/${BUILD_NUMBER}/" myweb.yaml'
                        sh 'kubectl apply -f myweb.yaml'
                    }
                }
            }
        }*/
        
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
