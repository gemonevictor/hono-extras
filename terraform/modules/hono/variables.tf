variable "namespace" {
  type        = string
  description = "namespace of the deployment"
}

variable "cluster_name" {
  type        = string
  description = "name of the cluster"
}

variable "project_id" {
  type        = string
  description = "Project ID in which the cluster is present"
}

variable "enable_http_adapter" {
  type        = bool
  description = "Used to enable the http adapter"
}

variable "enable_mqtt_adapter" {
  type        = bool
  description = "Used to enable the mqtt adapter"
}

variable "http_static_ip" {
  type        = string
  description = "static ip address for the http loadbalancer"
}

variable "mqtt_static_ip" {
  type        = string
  description = "static ip address for the mqtt loadbalancer"
}

variable "sql_user" {
  type        = string
  description = "username of the sql database username"
}

variable "sql_db_pw" {
  type        = string
  sensitive   = true
  description = "password for the sql_user for the database"
}

variable "sql_ip" {
  type        = string
  description = "URL of the Postgres Database"
}

variable "sql_database" {
  type        = string
  description = "name of the Postgres Database"
}

variable "service_name_communication" {
  type        = string
  description = "name of the Cloud Endpoint service for device communication"
}

variable "device_communication_static_ip_name" {
  type        = string
  description = "Name of the Static IP for External Ingress"
}

variable "helm_package_repository" {
  type        = string
  description = "Link to the Helm Package for the Hono Deployment"
}

variable "hono_chart_name" {
  type        = string
  description = "Name of the Chart in the Repository"
}

variable "hono_chart_version" {
  type        = string
  description = "Version of the Chart in the Repository"
}

variable "oauth_app_name" {
  type        = string
  description = "Name of the OAuth Application"
}

variable "device_communication_dns_name" {
  type        = string
  description = "Name of the DNS Host"
}

variable "api_tls_key" {
  type        = string
  description = "Content of the ingress tls/server Key File"
}

variable "api_tls_crt" {
  type        = string
  description = "Content of the ingress tls/server Cert File"
}

variable "http_tls_key" {
  type        = string
  description = "Content of the http tls Key File"
}

variable "http_tls_crt" {
  type        = string
  description = "Content of the http tls Cert File"
}

variable "mqtt_tls_key" {
  type        = string
  description = "Content of the mqtt tls Key File"
}

variable "mqtt_tls_crt" {
  type        = string
  description = "Content of the mqtt tls Cert File"
}

variable "api_tls_key_from_storage" {
  type        = string
  description = "Content of the ingress tls/server Key File from storage bucket"
}

variable "api_tls_crt_from_storage" {
  type        = string
  description = "Content of the ingress tls/server Cert File from storage bucket"
}

variable "http_tls_key_from_storage" {
  type        = string
  description = "Content of the http tls Key File from storage bucket"
}

variable "http_tls_crt_from_storage" {
  type        = string
  description = "Content of the http tls Cert File from storage bucket"
}

variable "mqtt_tls_key_from_storage" {
  type        = string
  description = "Content of the mqtt tls Key File from storage bucket"
}

variable "mqtt_tls_crt_from_storage" {
  type        = string
  description = "Content of the mqtt tls Cert File from storage bucket"
}

variable "cloud_endpoints_key_file" {
  type        = string
  description = "Service Account Key File for Cloud Endpoints Service Account"
  sensitive   = true
}

variable "http_secret_name" {
  type = string
  description = "Name of the kubernetes secret for the http adapter"
}

variable "mqtt_secret_name" {
  type = string
  description = "Name of the kubernetes secret for the mqtt adapter"
}

variable "ingress_secret_name" {
  type = string
  description = "Name of the kubernetes secret for the ingress"
}

variable "oauth_client_id" {
  type = string
  description = "The Google OAuth 2.0 client ID used in the Identity-Aware-Proxy (IAP)"
}

variable "oauth_client_secret" {
  type = string
  description = "The Google OAuth 2.0 client secret used in the Identity-Aware-Proxy (IAP)"
}
